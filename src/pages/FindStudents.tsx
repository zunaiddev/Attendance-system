import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../components/table";
import {useEffect, useState} from "react";
import Button from "../components/others/Button";
import useGet from "../hooks/useGet";
import getToken from "../utils/getToken";
import usePost from "../hooks/usePost";

interface Student {
    id: number;
    name: string;
    roll: string;
    course: string;
    year: number;
    section: string;
    semester: number;
    university: string;
}

function FindStudents() {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudents, setSelectedStudents] = useState<Set<number>>(new Set());
    const {get} = useGet();
    const [post, loading] = usePost();

    useEffect(() => {
        console.log("Selected Students", selectedStudents);
    }, [selectedStudents]);

    useEffect(() => {
        (async function () {
            const {data} = await get("/student/find", await getToken());
            setStudents(data);
        })();
    }, []);

    function add(id: number) {
        setSelectedStudents(prev => {
            let newSet = new Set(prev);
            newSet.add(id);
            return newSet;
        });
    }

    async function handleSave() {
        let [data, error] = await post("/student", [...selectedStudents], await getToken());
        console.log(data);
        console.log(error);
    }

    return (
        <div className="px-30 py-5 space-y-4">
            <div className="flex flex-col gap-6 rounded-xl border p-6">
                <div className="flex items-center gap-3">
                    <h1 className="text-xl font-bold">Students Info</h1>
                    <span className="bg-gray-800 text-primary px-2 py-1 rounded-md">
                {selectedStudents.size} / {students?.length} Selected
              </span>
                    <Button text="Save" type="button" onClick={handleSave}/>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Roll No</TableHead>
                                <TableHead>Course</TableHead>
                                <TableHead>Year</TableHead>
                                <TableHead>Section</TableHead>
                                <TableHead>Semester</TableHead>
                                <TableHead>University</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.map((student) => {
                                const isSelected: boolean = true;
                                return (
                                    <TableRow
                                        key={student.id}
                                        className={isSelected ? "bg-primary/5 border-primary/20" : ""}
                                    >
                                        <TableCell className="font-medium">{student.name}</TableCell>
                                        <TableCell>{student.roll}</TableCell>
                                        <TableCell>{student.course}</TableCell>
                                        <TableCell>{student.year}</TableCell>
                                        <TableCell>{student.section}</TableCell>
                                        <TableCell>{student.semester}</TableCell>
                                        <TableCell>{student.university}</TableCell>
                                        <TableCell>
                                            <div className="">
                                                <Button text="+" type="button" onClick={() => add(student.id)}
                                                        className="bg-none w-4 h-4 p-0 bg-transparent border hover:bg-transparent"/>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default FindStudents;