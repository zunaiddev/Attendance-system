import {useEffect, useState} from "react";
import Table from "../components/Table/Table.jsx";
import StudentsContext from "../context/StudentsContext.jsx";
import Spinner from "../components/others/Spinner.jsx";
import {getStudents} from "../services/DashboardService.js";
import {showToast} from "../components/Toaster/Toaster.jsx";
import Notification from "../components/others/Notification.jsx";
import Button from "../components/others/Button.jsx";
import Header from "../components/others/Header.jsx";
import exportToPdf from "../utils/exportToPdf.js";

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
        if (!sessionStorage.getItem("notify")) {
            if (user && !user.isProfileComplete) {
                showToast.custom((t) => <Notification heading="Alert" message="Please complete your profile"
                                                      dismiss={t.dismiss}/>, 5000);
                sessionStorage.setItem("notify", "true");
            }
        }
    }, [user]);

    function updateStudents(students) {
        setStudents(students);
    }

    if (loading) {
        return <Spinner/>;
    }

    return (
        <StudentsContext.Provider value={{students, updateStudents}}>
            <div className="relative sm:rounded-lg">
                <Header/>
                <Table/>
                <div className="py-5 flex justify-end">
                    <Button text="Save"/>
                    <Button text="Export to Pdf" onClick={() => exportToPdf(students)}/>
                </div>
            </div>
        </StudentsContext.Provider>
    );
}

export default Dashboard;