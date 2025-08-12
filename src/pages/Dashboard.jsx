import {useEffect, useState} from "react";
import StudentsContext from "../context/StudentsContext.jsx";
import {showToast} from "../components/Toaster/Toaster.jsx";
import Notification from "../components/others/Notification.jsx";
import Button from "../components/others/Button.jsx";
import Header from "../components/others/Header.jsx";
import exportToPdf from "../utils/exportToPdf.js";
import AddStudentForm from "../components/AddStudentForm/AddStudentForm.jsx";
import useGet from "../hooks/useGet.jsx";
import getToken from "../utils/getToken.js";
import MainLoader from "../loader/MainLoader.jsx";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";
import Table from "../components/Table/Table.jsx";

function Dashboard() {
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState(null);
    const [showStudentForm, setShowStudentForm] = useState(false);
    const {get, loading} = useGet();
    const [somethingWentWrong, setsSomethingWentWrong] = useState(false);
    const [isUpdate, setUpdate] = useState(false);

    useEffect(() => {
        (async function () {
            let {data, error} = await get("/student", await getToken());

            if (error) {
                setsSomethingWentWrong(true);
            }

            setStudents(data.students);
            setUser(data.user);
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

    function handleHideStudentForm() {
        setShowStudentForm(false);
        if (isUpdate) {
            setUpdate(false);
        }
    }

    function handleShowStudentForm() {
        setShowStudentForm(true);
    }

    function handleOnUpdate() {
        setUpdate(!isUpdate);
        setShowStudentForm(true);
    }

    if (loading) {
        return <MainLoader/>;
    }

    if (somethingWentWrong) {
        return <SomethingWentWrong/>
    }

    return (
        <StudentsContext.Provider value={{students, updateStudents}}>
            {students.length > 0 ? <div className="relative sm:rounded-lg">
                <Header onStudentAddClick={handleShowStudentForm} isUpdate={isUpdate} onUpdate={handleOnUpdate}/>
                <Table/>
                <div className="py-5 flex justify-end">
                    <Button text="Save"/>
                    <Button text="Export to Pdf" onClick={() => exportToPdf(students)}/>
                </div>
            </div> : <div className="size-full flex flex-col justify-center items-center gap-6">
                <h1 className="text-lg">There are not any students try to add</h1>
                <Button text="Add Students" className="!w-fit" onClick={handleShowStudentForm}/>
            </div>}

            {showStudentForm && <AddStudentForm onClose={handleHideStudentForm} isUpdate={isUpdate}/>}
        </StudentsContext.Provider>
    );
}

export default Dashboard;