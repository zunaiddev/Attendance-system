import InputField from "../others/InputField";
import {useForm} from "react-hook-form";
import Button from "../others/Button";
import putMapping from "../../API/putMapping";

function UpdatePassword() {
    const {
        register, handleSubmit, formState: {errors, isSubmitting}, setError, watch
    } = useForm();

    async function onSubmit(data: any) {
        const {error} = await putMapping("/user/update-password", data);

        if (error?.code === "INVALID_PASSWORD") {
            setError("currentPassword", {message: "Invalid password"});
        }
        console.log(error);
    }

    return <form onSubmit={handleSubmit(onSubmit)}
                 className="space-y-4 bg-gray-800 p-3 sm:p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <div className="grid grid-cols-1 gap-4">
            <InputField
                label="Current Password"
                type="password"
                register={register("currentPassword", {
                    required: "Current password is required"
                })}
                error={errors.currentPassword}
            />
            <InputField
                label="New Password"
                type="password"
                register={register("newPassword", {
                    required: "New password is required",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/,
                        message: "Weak Password"
                    },
                    validate: (value) => value !== watch("currentPassword") || "New password is same as previous one"
                })}
                error={errors.newPassword}
            />
            <InputField
                label="Confirm Password"
                type="password"
                register={register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === watch("newPassword") || "Passwords do not match"
                })}
                error={errors.confirmPassword}
            />
        </div>
        <Button text="Update Password" isSubmitting={isSubmitting}/>
    </form>
}

export default UpdatePassword;