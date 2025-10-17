import React, {useEffect, useState} from "react";
import StudentField from "../components/StudentField";
import {Student} from "../types/Student";
import Button from "../components/Buttons/Button";
import MainLoader from "../loader/MainLoader";
import SomethingWentWrong from "../components/others/SomethingWentWrong";
import getMapping from "../API/getMapping";
import ApiResponse from "../types/ApiResponse";

export default function FindStudents() {
    const [students, setStudents] = useState<Student[]>([
        {
            id: 1,
            name: "Amit Sharma",
            roll: "Student",
            course: "BCA",
            year: 2,
            section: "A",
            semester: 4,
            university: "Quantum University"
        },
        {
            id: 2,
            name: "Priya Verma",
            roll: "Student",
            course: "B.Tech",
            year: 3,
            section: "B",
            semester: 6,
            university: "IIT Delhi"
        },
        {
            id: 3,
            name: "Rohit Singh",
            roll: "Student",
            course: "B.Sc",
            year: 1,
            section: "C",
            semester: 2,
            university: "Delhi University"
        },
        {
            id: 4,
            name: "Sneha Gupta",
            roll: "Student",
            course: "MBA",
            year: 1,
            section: "A",
            semester: 1,
            university: "Quantum University"
        },
    ]);
    const [selected, setSelected] = useState<Set<number>>(new Set());
    const [loading, setLoading] = useState<boolean>(true);
    const [somethingWrong, setSomethingWrong] = useState<boolean>(false);

    useEffect(() => {
        (async function () {
            const {data, error}: ApiResponse = await getMapping("/students/find");
            setLoading(false);

            setStudents(data?.students);

            setSomethingWrong(error != null);
        })();
    }, []);

    function add(id: number): void {
        setSelected(prev => new Set(prev.add(id)));
    }

    function remove(id: number): void {
        setSelected(prev => {
            const set = new Set(prev);
            set.delete(id);
            return set;
        });
    }

    const handleSelectAllToggle = () => {
        if (selected.size === students.length) {
            setSelected(new Set());
            return;
        }
        setSelected(new Set(students.map(student => student.id)));
    };

    if (loading) {
        return <MainLoader/>;
    }

    if (somethingWrong) {
        return <SomethingWentWrong/>
    }

    if (students.length <= 0) {
        return <p>There are Not Students</p>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-extrabold tracking-wide">Find Students</h2>
                <Button onClick={handleSelectAllToggle}
                        text={selected.size == students.length ? "Deselect All" : "Select All"} type="button"/>
            </div>

            <div className="space-y-4">
                {students.map((student) => <StudentField key={student.id} student={student} add={add}
                                                         remove={remove} isAdded={selected.has(student.id)}/>)}
            </div>

            <div className="mt-10 flex justify-center">
                <button
                    className="px-8 py-3 bg-purple-600 font-semibold rounded-xl shadow-md hover:scale-105 hover:bg-purple-700 transition-transform duration-200">
                    Save
                </button>
            </div>
        </div>
    );
}
