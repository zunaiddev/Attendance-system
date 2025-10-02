import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Button from "../components/others/Button.tsx";
import InputField from "../components/others/InputField.tsx";
import UserEditIcon from "../components/icons/UserEditIcon.jsx";
import getInitials from "../utils/getInitials.js";
import getToken from "../utils/getToken.js";
import MainLoader from "../loader/MainLoader.jsx";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";
import capitaliseEachChar from "../utils/capitaliseEachChar.js";
import usePut from "../hooks/userPut.js";
import {toast} from "../components/Toaster/Toaster.js";
import getMapping from "../API/getMapping.js";
import Badge from "../components/Badge/Badge.js";
import Role from "../types/Role.js";
import UpdatePassword from "../components/Profile/UpdatePassword.js";

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const {register, handleSubmit, formState: {errors, isSubmitting}, setValue} = useForm();

    const {
        register: registerEmail, handleSubmit: handleEmailSubmit,
        formState: {errors: emailErrors, isSubmitting: isEmailSubmitting},
    } = useForm();

    const [put] = usePut();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (user) {
            let academic = user.academic;
            setValue("name", user.name);
            setValue("university", academic.university);
            setValue("section", academic.section);
            setValue("semester", academic.semester);
            setValue("year", academic.year);
        }
    }, [user]);

    useEffect(() => {
        (async function () {
            let {data, error} = await getMapping("/user");
            setLoading(false);
            setUser(data);

            setError(error != null);
        })();
    }, [])

    const onSubmit = async (formData) => {
        const [data, error] = await put("/user", formData, await getToken());
        setUser(data);
        setIsEditing(false);
        toast.success("Updated");
    };

    const onEmailSubmit = (data) => {
        console.log(data);
    };

    if (loading) {
        return <MainLoader/>;
    }

    if (error) {
        return <SomethingWentWrong/>;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white sm:p-8">
            <div className="w-full mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <div
                        className="size-14 sm:size-20 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                        {getInitials(user?.name)}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-bold inline-block">{capitaliseEachChar(user?.name)}</h1>
                            {getBadge(user?.role)}
                        </div>

                        <p className="text-gray-400">{user?.email}</p>
                    </div>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="p-2 hover:bg-gray-800 rounded-full"
                    >
                        <UserEditIcon/>
                    </button>
                </div>

                {isEditing ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <InputField
                                label="Name"
                                autoComplete="name"
                                register={register("name")}
                                error={errors.name}
                                autoFocus={true}
                            />
                            <InputField
                                label="University"
                                autoComplete="university"
                                register={register("university")}
                                error={errors.university}
                            />
                            <InputField
                                label="Section"
                                autoComplete="section"
                                register={register("section")}
                                error={errors.section}
                            />
                            <InputField
                                label="Semester"
                                type="number"
                                autoComplete="semester"
                                register={register("semester")}
                                error={errors.semester}
                            />
                            <InputField
                                label="Year"
                                type="number"
                                autoComplete="year"
                                register={register("year")}
                                error={errors.year}
                            />
                        </div>
                        <Button text="Save Changes" type="submit" isSubmitting={isSubmitting}/>
                    </form>
                ) : (
                    <div className="space-y-4 bg-gray-800 p-3 sm:p-6 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400">University</p>
                                <p>{capitaliseEachChar(user?.academic.university)}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Course</p>
                                <p>{user?.academic.course.toUpperCase()}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Section</p>
                                <p>{user?.academic.section}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Semester</p>
                                <p>{user?.academic.semester}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Year</p>
                                <p>{user?.academic.year}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-8">
                    <form onSubmit={handleEmailSubmit(onEmailSubmit)}
                          className="space-y-4 bg-gray-800 p-3 sm:p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold mb-4">Update Email</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <InputField
                                label="New Email"
                                type="email"
                                register={registerEmail("newEmail", {
                                    required: "New email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                error={emailErrors.newEmail}
                            />
                            <InputField
                                label="Current Password"
                                type="password"
                                register={registerEmail("password", {
                                    required: "Password is required to update email"
                                })}
                                error={emailErrors.password}
                            />
                        </div>
                        <Button text="Update Email" isSubmitting={isEmailSubmitting}/>
                    </form>
                    <UpdatePassword/>
                </div>
            </div>
        </div>
    );
}

function getBadge(role) {
    return <Badge text={role}
                  type={role === Role.STUDENT ? "gray" : role === Role.TEACHER ? "blue" : role === Role.ADMIN ? "yellow" : ""}/>

}

export default Profile;