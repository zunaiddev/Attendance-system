import {useEffect, useState} from "react";
import StudentsContext from "../context/StudentsContext.jsx";
import Button from "../components/others/Button.tsx";
import exportToPdf from "../utils/exportToPdf.js";
import useGet from "../hooks/useGet.jsx";
import getToken from "../utils/getToken.js";
import MainLoader from "../loader/MainLoader.jsx";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";
import Table from "../components/Table/Table.jsx";
import Switch from "../components/others/Switch.jsx";
import AddStudentsForm from "../components/StudentsForm/AddStudentsForm.jsx";
import InstitutionDetailsForm from "../components/InstitutionDetailsForm/InstitutionDetailsForm.jsx";
import usePut from "../hooks/userPut.js";
import {toast} from "../components/Toaster/Toaster.js";

function Dashboard() {
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState(null);
    const [showStudentForm, setShowStudentForm] = useState(false);
    const {get, loading} = useGet();
    const {put} = usePut();
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [showInstitutionForm, setShowInstitutionForm] = useState(false);

    useEffect(() => {
        (async function () {
            let {data, error} = await get("/student", await getToken());

            if (error) {
                setSomethingWentWrong(true);
                return;
            }

            setStudents(data?.students);
            setUser(data?.user);
        })();
    }, [get]);

    useEffect(() => {
        setShowInstitutionForm(user && !user.completed);

        // if (!sessionStorage.getItem("notify")) {
        //     if (user && !user.isProfileComplete) {
        //         toast.custom((t) => <Notification heading="Alert" message="Please complete your profile"
        //                                           dismiss={t.dismiss}/>, 5000);
        //         sessionStorage.setItem("notify", "true");
        //     }
        // }
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

    async function handleFindStudents() {
        console.log("Finding students");
        const {data, error} = await get("/student/find", await getToken());

        setStudents(data);
        setUpdate(true);
    }

    async function handleOnSubmit(formData) {
        formData.name = user.name;
        let {data, error} = await put("/user", formData, await getToken());

        if (error) {
            toast.error("Something went wrong!");
            return;
        }

        setUser(data);
        toast.success("Successfully updated");
    }

    return (
        <StudentsContext.Provider value={{students, updateStudents}}>
            <>
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
                    <Button text="Find Students" onClick={handleFindStudents}/>
                </div>}

                {showStudentForm && <AddStudentsForm onClose={handleHideStudentForm} isUpdate={isUpdate}/>}
                {showInstitutionForm &&
                    <InstitutionDetailsForm onClose={() => setShowInstitutionForm(false)} onSubmit={handleOnSubmit}/>}
            </>
        </StudentsContext.Provider>
    );
}

export default Dashboard;