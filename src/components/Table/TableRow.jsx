import {useContext} from "react";
import PropTypes from "prop-types";
import StudentsContext from "../../context/StudentsContext.jsx";

function TableRow({student, view}) {
    const {students, updateStudents} = useContext(StudentsContext);
    let {name, roll, course, year, semester, section} = student;
    semester = 2;

    function handleCheck(e, roll) {
        updateStudents(students.map(s => s.roll === roll ? {
            ...s,
            present: e.target.checked
        } : s));
    }

    return (
        <tr className={`border-b border-gray-700 hover:bg-gray-600 ${student.isPresent ? "bg-[#74b37d] text-white" : "bg-gray-800"}`}>
            <td className="w-4 p-4">
                <input type="checkbox" checked={student.present}
                       onChange={(e) => handleCheck(e, student.roll)}
                       className="w-4 h-4 text-blue-600 rounded-sm  bg-gray-700 border-gray-600 cursor-pointer"/>
            </td>
            <th scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {name.replace(/^\w/, c => c.toUpperCase())}
            </th>
            <td className="px-6 py-4">
                {roll}
            </td>
            {
                view !== "Standard" && <>
                    <td className="px-6 py-4">
                        {course.toUpperCase()}
                    </td>
                    <td className="px-6 py-4">
                        {year}{getHolder(year)}
                    </td>
                    <td className="px-6 py-4">
                        {section}
                    </td>
                    <td className="px-6 py-4">
                        {semester}{getHolder(semester)}
                    </td>
                </>
            }
        </tr>
    );
}

function getHolder(val) {
    return val === 1 ? "st" : val === 2 ? "nd" : val === 3 ? "rd" : "th";
}

TableRow.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        roll: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        sec: PropTypes.string.isRequired,
        sem: PropTypes.string.isRequired
    }).isRequired,
    view: PropTypes.string.isRequired,
}

export default TableRow;