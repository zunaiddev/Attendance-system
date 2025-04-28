import {useContext, useEffect, useRef, useState} from "react";
import {IoIosSearch} from "react-icons/io";
import {RxCross2} from "react-icons/rx";
import TableRow from "./TableRow.jsx";
import TableSelect from "./TableSelect.jsx";
import isMobile from "../../utils/isMobile.js";
import StudentsContext from "../../context/StudentsContext.jsx";

function Table() {
    const {students, updateStudents} = useContext(StudentsContext);

    const [view, setView] = useState(isMobile() ? "Standard" : "Normal");
    const [filtered, setFiltered] = useState(students);
    const [isClear, setIsClear] = useState(false);
    const tableRef = useRef(null);

    useEffect(() => {
        setFiltered(students);
    }, [students]);

    function filterStudents(value) {
        setFiltered(students.filter(student => {
            return student.name.toLowerCase().includes(value)
                || student.roll.toLowerCase().includes(value);
        }));
    }

    function sort(e) {
        if (e.target.value === "Name") {
            setFiltered([...students].sort((a, b) => a.name.localeCompare(b.name)));
            return;
        }

        setFiltered([...students].sort((a, b) => a.roll.localeCompare(b.roll)));
    }

    function clearSearch() {
        setIsClear(true);
    }

    function handleOnChange(e) {
        let value = e.target.value.toLowerCase().trim();
        setIsClear(value !== "");
        filterStudents(value);
    }

    function changeView(e) {
        setView(e.target.value);
    }

    function handleAllCheck(e) {
        updateStudents(students.map(student => ({...student, isPresent: e.target.checked})));
    }

    return (
        <div>
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
                        <TableSelect list={["Name", "Roll"]} onChange={sort}/>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-white">View : </span>
                        <TableSelect list={["Normal", "Standard"]} defaultValue={view} onChange={changeView}/>
                    </div>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-400" ref={tableRef}>
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <input type="checkbox" onChange={handleAllCheck}
                               className="w-4 h-4 text-blue-600 rounded-md bg-gray-700 border-gray-600 cursor-pointer"/>
                    </th>
                    {
                        ["Name", "Roll"]
                            .map((item, idx) => <th scope="col" className="px-6 py-3" key={idx}>{item}</th>)
                    }
                    {view !== "Standard" &&
                        ["Course", "Year", "Sec", "Sem"]
                            .map((item, idx) => <th scope="col" className="px-6 py-3" key={idx}>{item}</th>)
                    }
                </tr>
                </thead>
                <tbody>
                {filtered.map((student) => <TableRow key={student.roll} student={student} view={view}
                                                     updateStudents={updateStudents}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;