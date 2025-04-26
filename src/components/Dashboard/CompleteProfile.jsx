import InputField from "../UI/InputField.jsx";
import {useState} from "react";
import Button from "../UI/Button.jsx";
import {useForm} from "react-hook-form";

function CompleteProfile() {
    const [role, setRole] = useState("");

    async function handleRoleChange(e) {
        setRole(e.target.value);
    }

    return (
        <div className="space-y-4">
            <div className="relative">
                <label className="block mb-2 text-sm font-medium text-white">Select Role</label>
                <select
                    className="bg-gray-700 border-gray-600 rounded-lg text-white cursor-pointer p-2.5 w-full outline-none"
                    value={role}
                    onChange={handleRoleChange}
                >
                    <option value="">Select role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>
            {role === "student" && <StudentForm/>}
            {role === "teacher" && <TeacherForm/>}
        </div>
    );
}

function StudentForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm();

    async function onSubmit(data) {
        new Promise(res => setTimeout(res, 2000));
        console.log(data);
    }


    return <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
            <InputField placeholder="College/Department name" autoFocus
                        register={register("college", {
                            required: "College/Department name is required",
                        })}
                        errors={errors.college}
            />
        </div>

        <div className="relative">
            <InputField placeholder="Course"
                        register={register("course", {
                            required: "Course is required",
                        })}
                        errors={errors.course}
            />
        </div>

        <div className="relative">
            <InputField placeholder="Year"
                        register={register("year", {
                            required: "Year is required",
                        })}
                        errors={errors.year}
            />
        </div>

        <div className="relative">
            <InputField placeholder="Section"
                        register={register("section", {
                            required: "Section is required",
                        })}
                        errors={errors.section}
            />
        </div>

        <div className="relative">
            <InputField placeholder="Semester"
                        register={register("semester", {
                            required: "Semester is required",
                        })}
                        errors={errors.semester}
            />
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
            <label htmlFor="cr" className="text-white">Class Representative?</label>
            <input type="checkbox" id="cr"
                   className="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 bg-gray-700 border-gray-600"/>
        </div>
        <Button text="Save" isSubmitting={isSubmitting}/>
    </form>
}

function TeacherForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm();

    async function onSubmit(data) {
        new Promise(res => setTimeout(res, 2000));
        console.log(data);
    }

    return <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
            <InputField placeholder="Department"
                        register={register("department", {
                            required: "Department is required",
                        })}
                        errors={errors.department}
            />
        </div>

        <div className="relative">
            <InputField placeholder="Designation"
                        register={register("designation", {
                            required: "Designation is required",
                        })}
                        errors={errors.designation}
            />
        </div>

        <div className="relative">
            <InputField placeholder="Specialization"
                        register={register("specialization", {
                            required: "Specialization is required",
                        })}
                        errors={errors.specialization}
            />
        </div>

        <div className="flex items-center gap-2">
            <label className="text-white">Head of Department?</label>
            <input type="checkbox"
                   className="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 bg-gray-700 border-gray-600"/>
        </div>
        <Button text="Save" isSubmitting={isSubmitting}/>
    </form>;
}

function List({list, onClick}) {
    return (
        <div
            className="min-w-48 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white overflow-hidden absolute z-10 top-full mt-1 shadow-lg hidden">
            {list.map((item, idx) => <li key={idx}
                                         className="block w-full px-4 py-2 border-b  cursor-pointer focus:outline-none focus:ring-2 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white">
                {item}
            </li>)
            }
        </div>
    );
}

export default CompleteProfile;