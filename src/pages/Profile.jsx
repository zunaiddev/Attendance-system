import {useState} from "react";
import {useForm} from "react-hook-form";
import Button from "../components/Button";
import {FiEdit2} from "react-icons/fi";
import InputField from "../components/InputField.jsx";
import Checkbox from "../components/Checkbox.jsx";

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@example.com",
        university: "Sample University",
        section: "A",
        semester: "6",
        year: "3",
        isClassRep: false
    });

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        defaultValues: user
    });

    const {
        register: registerPass,
        handleSubmit: handlePassSubmit,
        formState: {errors: passErrors, isSubmitting: isPassSubmitting},
        getValues
    } = useForm();

    const {
        register: registerEmail,
        handleSubmit: handleEmailSubmit,
        formState: {errors: emailErrors, isSubmitting: isEmailSubmitting},
    } = useForm();

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const onSubmit = (data) => {
        setUser(data);
        setIsEditing(false);
    };

    const onPasswordSubmit = (data) => {
        console.log(data);
    };

    const onEmailSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="w-full mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <div
                        className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                        {getInitials(user.name)}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <p className="text-gray-400">{user.email}</p>
                    </div>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="p-2 hover:bg-gray-800 rounded-full"
                    >
                        <FiEdit2 className="size-5"/>
                    </button>
                </div>

                {isEditing ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <InputField
                                label="Name"
                                autoComplete="name"
                                register={register("name")}
                                errors={errors.name}
                                autoFocus={true}
                            />
                            <InputField
                                label="University"
                                autoComplete="university"
                                register={register("university")}
                                errors={errors.university}
                            />
                            <InputField
                                label="Section"
                                autoComplete="section"
                                register={register("section")}
                                errors={errors.section}
                            />
                            <InputField
                                label="Semester"
                                type="number"
                                autoComplete="semester"
                                register={register("semester")}
                                errors={errors.semester}
                            />
                            <InputField
                                label="Year"
                                type="number"
                                autoComplete="year"
                                register={register("year")}
                                errors={errors.year}
                            />
                            <Checkbox text="I'm a Class Representative" register={register("isClassRep")}/>
                        </div>
                        <Button text="Save Changes" isSubmitting={isSubmitting}/>
                    </form>
                ) : (
                    <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400">University</p>
                                <p>{user.university}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Section</p>
                                <p>{user.section}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Semester</p>
                                <p>{user.semester}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Year</p>
                                <p>{user.year}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-gray-400">Role</p>
                                <p>{user.isClassRep ? "Class Representative" : "Student"}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-8">
                    <form onSubmit={handleEmailSubmit(onEmailSubmit)}
                          className="space-y-4 bg-gray-800 p-6 rounded-lg mb-8">
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
                                errors={emailErrors.newEmail}
                            />
                            <InputField
                                label="Current Password"
                                type="password"
                                register={registerEmail("password", {
                                    required: "Password is required to update email"
                                })}
                                errors={emailErrors.password}
                            />
                        </div>
                        <Button text="Update Email" isSubmitting={isEmailSubmitting}/>
                    </form>

                    <form onSubmit={handlePassSubmit(onPasswordSubmit)}
                          className="space-y-4 bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <InputField
                                label="Current Password"
                                type="password"
                                register={registerPass("currentPassword", {
                                    required: "Current password is required"
                                })}
                                errors={passErrors.currentPassword}
                            />
                            <InputField
                                label="New Password"
                                type="password"
                                register={registerPass("newPassword", {
                                    required: "New password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    }
                                })}
                                errors={passErrors.newPassword}
                            />
                            <InputField
                                label="Confirm New Password"
                                type="password"
                                register={registerPass("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) => value === getValues("newPassword") || "Passwords do not match"
                                })}
                                errors={passErrors.confirmPassword}
                            />
                        </div>
                        <Button text="Update Password" isSubmitting={isPassSubmitting}/>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;