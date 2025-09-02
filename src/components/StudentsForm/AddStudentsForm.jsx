import CloseIcon from "../icons/CloseIcon.tsx";
import StudentFields from "./StudentFields.jsx";
import Button from "../others/Button.tsx";
import {useFieldArray, useForm} from "react-hook-form";
import {useCallback, useContext, useEffect, useMemo} from "react";
import useConfirm from "../../hooks/useConfirm.jsx";
import PropTypes from "prop-types";
import usePost from "../../hooks/usePost.jsx";
import getToken from "../../utils/getToken.js";
import StudentsContext from "../../context/StudentsContext.jsx";

function AddStudentsForm({onClose, isUpdate}) {
    const {students, updateStudents} = useContext(StudentsContext);

    const rolls = useMemo(() => isUpdate ? [] : students.map(student => student.roll), [isUpdate, students]);

    const {
        control, register, handleSubmit,
        formState: {errors, isSubmitting}, reset, getValues
    } = useForm();

    const {fields, append, remove} = useFieldArray({control, name: "students"});

    const addField = useCallback(() => append({
        name: "John Doe", roll: "23120254", course: "BCA",
        section: "C6", semester: 1, year: 2
    }), [append]);

    const {post} = usePost();

    const [confirm, Confirm] = useConfirm();

    useEffect(() => {
        if (isUpdate) append(students); else addField();
    }, [addField, append, isUpdate, students]);

    function duplicateField() {
        let values = getValues().students;
        let lastField = values[values.length - 1];
        append(lastField);
    }

    async function handleReset() {
        let values = getValues().students;

        for (const value of values) {
            for (let val in value) {
                if (value[val] !== "") {
                    if (await confirm()) reset();
                }
            }
        }
    }

    async function handleClose() {
        if (!isUpdate) await handleReset();
        onClose();
    }

    async function submit(formData) {
        let {data} = await post("/student", formData.students, await getToken());
        updateStudents(prev => [...prev, ...data]);
        reset();
        onClose();
    }

    function handleOnChange(e) {
        console.log(e.target.checked);
    }

    return (
        <div
            className="absolute top-0 pt-10 right-0 left-0 z-50 flex justify-center size-full bg-gray-500/10 backdrop-blur-sm rounded-sm">
            <div className="relative w-full md:w-[95%]">
                <div className="relative rounded-lg shadow-sm bg-gray-600">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 className="text-xl font-semibold text-white">
                            Student Information
                        </h3>
                        <button onClick={handleClose}
                            className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-500 hover:text-white cursor-pointer">
                            <CloseIcon/>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="p-4 md:p-5 space-y-4 h-auto max-h-[65vh] overflow-y-auto scroll-smooth">
                            {fields.map((item, index) => (
                                <StudentFields
                                    key={item.id}
                                    index={index}
                                    register={register}
                                    errors={errors}
                                    remove={() => remove(index)}
                                    rolls={rolls}
                                    update={isUpdate}
                                    onChange={handleOnChange}
                                />
                            ))}

                            <div className="space-x-3 flex justify-end">

                            </div>

                        </div>
                        <div className="flex justify-end py-4 pr-4">
                            {!isUpdate && <>
                                <Button type="button" text="Duplicate" className="!w-25 bg-gray-500 hover:bg-gray-400"
                                        onClick={duplicateField}/>
                                <Button type="button" text="Add" className="!w-25 bg-gray-500 hover:bg-gray-400"
                                        onClick={addField}/>
                                <Button text="Clear" className="!w-25 bg-gray-500 hover:bg-gray-400"
                                        onClick={handleReset}/>
                            </>}
                            <Button type="submit" text={isUpdate ? "Update" : "Submit"} className="!w-25"
                                    isSubmitting={isSubmitting}/>
                        </div>
                    </form>
                </div>
            </div>
            <Confirm message="Are you sure you want to Reset Whole Form"/>
        </div>
    );
}

AddStudentsForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    isUpdate: PropTypes.bool.isRequired,
}

export default AddStudentsForm;