import {useContext, useEffect, useRef, useState} from "react";
import TableRow from "./TableRow.jsx";
import TableSelect from "./TableSelect.jsx";
import isMobile from "../../utils/isMobile.js";
import StudentsContext from "../../context/StudentsContext.jsx";
import SearchInput from "../others/SearchInput.jsx";

function Table() {
    const {students, updateStudents} = useContext(StudentsContext);

    const [view, setView] = useState(localStorage.getItem("view") ? localStorage.getItem("view") : isMobile() ? "Standard" : "Normal");
    const [filtered, setFiltered] = useState(students);
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
        let value = e.target.value;
        if (value === "Name") {
            setFiltered([...students].sort((a, b) => a.name.localeCompare(b.name)));
            return;
        }
        setFiltered([...students].sort((a, b) => a.roll.localeCompare(b.roll)));
    }

    function handleOnChange(value) {
        filterStudents(value);
    }

    function changeView(e) {
        let view = e.target.value;
        setView(view);
        localStorage.setItem("view", view);
    }

    function handleAllCheck(e) {
        updateStudents(students.map(student => ({...student, isPresent: e.target.checked})));
    }

    return (
        <div className="relative">
            <div
                className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-start sm:justify-between items-center pb-4">
                <SearchInput onChange={handleOnChange}/>
                <div
                    className="flex w-full flex-wrap items-center gap-3 p-2 rounded-lg justify-end">
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-white">Sort By : </span>
                        <TableSelect list={["Roll", "Name"]} defaultValue="Roll" onChange={sort}/>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-white">View : </span>
                        <TableSelect list={["Normal", "Standard"]} defaultValue={view} onChange={changeView}/>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                {filtered.length === 0 ? <div className="text-center text-white">No Students Found</div> :
                <table className="w-full text-sm text-left rtl:text-right text-gray-400 overflow-x-scroll"
                       ref={tableRef}>
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
                }
            </div>
        </div>
    );
}

export default Table;