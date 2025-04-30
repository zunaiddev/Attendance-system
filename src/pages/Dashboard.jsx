import {useEffect, useState} from "react";
import Table from "../components/Table/Table.jsx";
import StudentsContext from "../context/StudentsContext.jsx";
import Spinner from "../components/Spinner.jsx";
import {getStudents} from "../services/DashboardService.jsx";
import {showToast} from "../components/Toaster/Toaster.jsx";
import Notification from "../components/Notification.jsx";
import Button from "../components/Button.jsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Dashboard() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async function () {
            let response = await getStudents();
            setStudents(response.data);
            setUser(response.user);
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (user && !user.isProfileComplete) {
            showToast.custom((t) => <Notification heading="Alert" message="Please complete your profile"
                                                  dismiss={t.dismiss}/>, 10000);
        }

    }, [user]);

    function updateStudents(students) {
        setStudents(students);
    }

    const exportToPdf = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("Attendance Report", 14, 15);

        const headers = [["Name", "Roll", "Course", "Year", "Sec", "Sem", "Status"]];
        const data = students.map((s) => [
            s.name,
            s.roll,
            s.course,
            s.year,
            s.sec,
            s.sem,
            s.isPresent ? "Present" : "Absent"
        ]);

        autoTable(doc, {
            startY: 20,
            head: headers,
            body: data,
            didParseCell: function (data) {
                if (data.section === 'body' && data.column.index === 6) {
                    const status = data.cell.text[0];
                    if (status === "Present") {
                        data.cell.styles.fillColor = [204, 255, 204];
                        data.cell.styles.textColor = [0, 100, 0];
                    } else {
                        data.cell.styles.fillColor = [255, 204, 204];
                        data.cell.styles.textColor = [139, 0, 0];
                    }
                }
            },
        });

        doc.save("attendance-report.pdf");
    };


    if (loading) {
        return <Spinner/>;
    }

    return (
        <StudentsContext.Provider value={{students, updateStudents}}>
            <div className="relative sm:rounded-lg">
                <Table/>
                <div className="py-5 flex justify-end">
                    <Button text="Save"/>
                    <Button text="Export to Pdf" onClick={exportToPdf}/>
                </div>
            </div>
        </StudentsContext.Provider>
    );
}

export default Dashboard;