import {useEffect, useState} from "react";
import StudentsContext from "../context/StudentsContext.jsx";
import {toast} from "../components/Toaster/Toaster.tsx";
import Notification from "../components/others/Notification.jsx";
import Button from "../components/others/Button.tsx";
import exportToPdf from "../utils/exportToPdf.js";
import useGet from "../hooks/useGet.jsx";
import getToken from "../utils/getToken.js";
import MainLoader from "../loader/MainLoader.jsx";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";
import Table from "../components/Table/Table.jsx";
import Switch from "../components/others/Switch.jsx";
import AddStudentsForm from "../components/StudentsForm/AddStudentsForm.jsx";

function Dashboard() {
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState(null);
    const [showStudentForm, setShowStudentForm] = useState(false);
    const {get, loading} = useGet();
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);
    const [isUpdate, setUpdate] = useState(false);

    useEffect(() => {
        (async function () {
            let {data, error} = await get("/student", await getToken());

            if (error) {
                setSomethingWentWrong(true);
            }

            setStudents(data.students);
            setUser(data.user);
        })();
    }, [get]);

    useEffect(() => {
        if (!sessionStorage.getItem("notify")) {
            if (user && !user.isProfileComplete) {
                toast.custom((t) => <Notification heading="Alert" message="Please complete your profile"
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

    function handleAddStudents() {
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
                <div className="w-full pb-2 flex items-center gap-10">
                    <div>
                        <Switch label="Auto save"/>
                    </div>
                    <Button text="+ Add Students" className="text-white text-sm cursor-pointer"
                            onClick={handleAddStudents}/>
                    <Button text={isUpdate ? "Cancel" : "Manage"} onClick={handleOnUpdate}
                            className="sm:!w-fit sm:ml-2 !py-2 bg-gray-700 border-gray-600 hover:bg-gray-600"/>
                </div>

                <Table/>

                <div className="py-5 flex justify-end">
                    <Button text="Save"/>
                    <Button text="Export to Pdf" onClick={() => exportToPdf(students)}/>
                </div>
            </div> : <div className="size-full flex flex-col justify-center items-center gap-6">
                <h1 className="text-lg">There are not any students try to add</h1>
                <Button text="Add Students" onClick={handleAddStudents}/>
            </div>}

            {showStudentForm && <AddStudentsForm onClose={handleHideStudentForm} isUpdate={isUpdate}/>}
        </StudentsContext.Provider>
    );
}

export default Dashboard;