import {useEffect, useState} from "react";
import Table from "../components/Table/Table.jsx";
import StudentsContext from "../context/StudentsContext.jsx";
import Spinner from "../components/Spinner.jsx";
import {getStudents} from "../services/DashboardService.jsx";
import {showToast} from "../components/Toaster/Toaster.jsx";
import Notification from "../components/Notification.jsx";

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

    if (loading) {
        return <Spinner/>;
    }

    return (
        <StudentsContext.Provider value={{students, updateStudents}}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table students={students} updateStudents={updateStudents}/>
            </div>
        </StudentsContext.Provider>
    );
}

export default Dashboard;