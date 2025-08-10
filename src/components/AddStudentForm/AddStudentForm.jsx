import CloseIcon from "../icons/CloseIcon.jsx";
import StudentFields from "./StudentFields.jsx";
import Button from "../others/Button.jsx";
import {useFieldArray, useForm} from "react-hook-form";
import {useEffect} from "react";

function AddStudentForm() {
    const {
        control,
        register,
        handleSubmit, formState: {errors}
    } = useForm();

    const {fields, append, remove} = useFieldArray({
        control,
        name: "students"
    });

    useEffect(() => {
        addStudent();
    }, []);

    function addStudent() {
        append({
            name: "",
            roll: "",
            section: "",
            semester: "",
            year: ""
        });
    }

    async function submit(data) {
        console.log(data);
    }

    return (
        <div
            className="fixed top-0 right-0 left-0 z-50 flex py-5 justify-center bg-red-500 size-full">
            <div className="relative p-4 w-full md:w-[90%] h-full max-h-3/4">
                <div className="relative rounded-lg shadow-sm bg-gray-600">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 className="text-xl font-semibold text-white">
                            Student Information
                        </h3>
                        <button
                            className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-500 hover:text-white cursor-pointer">
                            <CloseIcon/>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="p-4 md:p-5 space-y-4 h-auto max-h-[75vh] overflow-y-auto scrollbar-hide">
                            {fields.map((item, index) => (
                                <StudentFields
                                    key={item.id}
                                    index={index}
                                    register={register}
                                    errors={errors}
                                />
                            ))}
                            <button onClick={addStudent} type="button">Add</button>
                        </div>
                        <div className="flex justify-end pb-4 pr-4">
                            <Button text="Clear" className="!w-25 bg-gray-500 hover:bg-gray-400"/>
                            <Button type="submit" text="Submit" className="!w-25"/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default AddStudentForm;