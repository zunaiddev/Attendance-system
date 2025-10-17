import Button from "./Buttons/Button.js";
import {useEffect, useState} from "react";
import {Student} from "../types/Student";

interface Props {
    student: Student;
    add: (id: number) => void;
    remove: (id: number) => void;
    isAdded: boolean;
}

function StudentField({student, add, remove, isAdded}: Props) {
    const [added, setAdded] = useState<boolean>(isAdded);

    useEffect(() => {
        setAdded(isAdded);
    }, [isAdded]);

    function handleClick() {
        if (added) {
            remove(student.id);
            setAdded(false);
            return;
        }

        add(student.id);
        setAdded(true);
    }

    return (
        <div
            key={student.id}
            className="flex justify-between items-center p-5 rounded-xl bg-gray-800/90 backdrop-blur shadow-lg hover:shadow-xl hover:bg-gray-700/90 transition duration-200"
        >
            <div>
                <p className="text-xl font-semibold">{student.name}</p>
                <p className="text-sm text-gray-400">Roll No: {student.roll}</p>
                <p className="text-sm text-gray-300 mt-1">
                    {student.course} • {student.year} Year • Sec {student.section} • {student.semester} Sem
                </p>
            </div>
            <Button text={added ? "Remove" : "Add"} className={added ? "bg-red-500 hover:bg-red-600" : ""} type="button"
                    onClick={handleClick}/>
        </div>
    );
}

export default StudentField;