import {useState} from "react";
import Table from "./Table.jsx";
import CompleteProfile from "./CompleteProfile.jsx";

function Dashboard() {
    const dummyArray = [
        {name: "Amit Sharma", roll: "BCA2023-001", course: "BCA", year: "2nd", sec: "A", sem: "4th", isPresent: false},
        {name: "Priya Verma", roll: "BCA2023-002", course: "BCA", year: "2nd", sec: "A", sem: "4th", isPresent: false},
        {name: "Rohit Singh", roll: "BCA2023-003", course: "BCA", year: "2nd", sec: "B", sem: "4th", isPresent: false},
        {name: "Neha Rani", roll: "BCA2023-004", course: "BCA", year: "2nd", sec: "B", sem: "4th", isPresent: false},
        {name: "Zunaid Khan", roll: "BCA2023-005", course: "BCA", year: "2nd", sec: "A", sem: "4th", isPresent: false},
        {name: "Karan Mehta", roll: "BCA2023-006", course: "BCA", year: "2nd", sec: "C", sem: "4th", isPresent: false},
        {name: "Sneha Yadav", roll: "BCA2023-007", course: "BCA", year: "2nd", sec: "C", sem: "4th", isPresent: false},
    ];
    const [user, setUser] = useState({
            id: "user_123456",
            name: "Zunaid",
            email: "zunaid@example.com",
            role: "STUDENT",
            course: "BCA",
            year: "2nd",
            section: "A",
            semester: "4",
            isProfileComplete: true
        }
    );

    const [students, setStudents] = useState(dummyArray);
    return (user.isProfileComplete ?
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table students={students}/>
            </div> :
            <CompleteProfile/>
    );
}

export default Dashboard;