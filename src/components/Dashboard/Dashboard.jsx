import {IoIosSearch} from "react-icons/io";
import {useState} from "react";
import PropTypes from "prop-types";
import {RxCross2} from "react-icons/rx";

function Dashboard() {
    const [headers, setHeaders] = useState(window.innerWidth > 639 ? ["Name", "Roll", "Course", "Year", "Sec", "Sem"] : ["Name", "Roll"]);
    const dummyArray = [
        {name: "Amit Sharma", roll: "BCA2023-001", course: "BCA", year: "2nd", sec: "A", sem: "4th"},
        {name: "Priya Verma", roll: "BCA2023-002", course: "BCA", year: "2nd", sec: "A", sem: "4th"},
        {name: "Rohit Singh", roll: "BCA2023-003", course: "BCA", year: "2nd", sec: "B", sem: "4th"},
        {name: "Neha Rani", roll: "BCA2023-004", course: "BCA", year: "2nd", sec: "B", sem: "4th"},
        {name: "Zunaid Khan", roll: "BCA2023-005", course: "BCA", year: "2nd", sec: "A", sem: "4th"},
        {name: "Karan Mehta", roll: "BCA2023-006", course: "BCA", year: "2nd", sec: "C", sem: "4th"},
        {name: "Sneha Yadav", roll: "BCA2023-007", course: "BCA", year: "2nd", sec: "C", sem: "4th"},
    ];
    const [students, setStudents] = useState(dummyArray);
    const [view, setView] = useState(window.innerWidth > 639 ? "Normal" : "Standard");
    const [isClear, setIsClear] = useState(false);

    function filterStudents(value) {
        setStudents(dummyArray.filter(student => {
            return student.name.toLowerCase().includes(value)
                || student.roll.toLowerCase().includes(value)
                || student.course.toLowerCase().includes(value)
                || student.year.toLowerCase().includes(value)
                || student.sec.toLowerCase().includes(value)
                || student.sem.toLowerCase().includes(value);
        }));
    }

    function sort(e) {
        if (e.target.value === "Name") {
            setStudents([...students].sort((a, b) => a.name.localeCompare(b.name)));
            return;
        }

        setStudents([...students].sort((a, b) => a.roll.localeCompare(b.roll)));
    }

    function clearSearch() {
        setIsClear("");
    }

    function changeView(e) {
        let value = e.target.value;
        if (value === "Standard") {
            setHeaders(["Name", "Roll"]);
        } else {
            setHeaders(["Name", "Roll", "Course", "Year", "Sec", "Sem"]);
        }
        setView(value);
    }

    function handleOnChange(e) {
        let value = e.target.value.toLowerCase().trim();
        setIsClear(value !== "");
        filterStudents(value);
    }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div
                    className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <div className="relative">
                        <div
                            className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <IoIosSearch className="size-4"/>
                        </div>
                        <input type="text"
                               className="block outline-none p-2 ps-10 text-sm border rounded-lg w-80 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Search for items" onChange={handleOnChange}/>
                        {isClear &&
                            <div className="absolute inset-y-0 right-2 flex items-center ps-3 cursor-pointer"
                                 onClick={clearSearch}>
                                <RxCross2 className="size-4"/>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-white">Sort By : </span>
                            <Select list={["Name", "Roll"]} onChange={sort}/>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-white">View : </span>
                            <Select list={["Normal", "Standard"]} onChange={changeView}/>
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <input type="checkbox"
                                   className="w-4 h-4 text-blue-600 rounded-md bg-gray-700 border-gray-600 cursor-pointer"/>
                        </th>
                        {headers.map((item, idx) => <th scope="col" className="px-6 py-3" key={idx}>{item}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => <Row key={student.roll} student={student} view={view}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Row({student, view}) {
    return (
        <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
            <td className="w-4 p-4">
                <input type="checkbox"
                       className="w-4 h-4 text-blue-600 rounded-sm  bg-gray-700 border-gray-600 cursor-pointer"/>
            </td>
            <th scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {student.name}
            </th>
            <td className="px-6 py-4">
                {student.roll}
            </td>
            {
                view !== "Standard" && <>
                    <td className="px-6 py-4">
                        {student.course}
                    </td>
                    <td className="px-6 py-4">
                        {student.year}
                    </td>
                    <td className="px-6 py-4">
                        {student.sec}
                    </td>
                    <td className="px-6 py-4">
                        {student.sem}
                    </td>
                </>
            }
        </tr>
    );
}

function Select({list, onChange}) {
    return (
        <div>
            <select
                className="bg-gray-700 border-gray-600 rounded-md text-white cursor-pointer px-4 py-1 outline-none appearance-none"
                onChange={onChange}>
                {list.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
            </select>
        </div>
    );
}

Row.propTypes = {
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

Select.prototype = {
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Dashboard;