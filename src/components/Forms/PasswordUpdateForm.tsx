import {useForm} from "react-hook-form";
import FloatForm from "./FloatForm";
import ProfileInput from "../Fields/ProfileInput";
import ForgetPasswordField from "./ForgetPasswordField";

interface Props {
    hideForm: () => void;
}

interface PasswordForm {
    password: string;
    newPassword: string;
    confirmPassword: string;
}

function PasswordUpdateForm({hideForm}: Props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting},
    } = useForm<PasswordForm>();

    const {password, newPassword, confirmPassword} = watch();

    const filled: boolean = password?.trim().length > 0
        && newPassword?.trim().length > 0
        && confirmPassword?.trim().length > 0;


    const onSubmit = (data: any) => {
        console.log("Password update data:", data);
        // Call API here
    };

    const handleHide = () => {
        if (isSubmitting) return;
        hideForm();
    };

    return (<FloatForm title="Change Password" desc="Enter your current password and choose a new one"
                       isSubmitting={isSubmitting} isDisabled={!filled} onHide={handleHide}
                       onSubmit={handleSubmit(onSubmit)} gridCols={1}>

            <ProfileInput
                label="Current Password"
                type="password"
                register={register("password", {
                    required: "Current password is required",
                })}
                error={errors.password}
            />

            <ProfileInput
                label="New Password"
                type="password"
                register={register("newPassword", {
                    required: "New password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                    },
                })}
                error={errors.newPassword}
            />
            <ProfileInput
                label="Confirm New Password"
                type="password"
                register={register("confirmPassword", {
                    required: "Please confirm your new password",
                    validate: value =>
                        value === newPassword || "Passwords do not match",
                })}
                error={errors.confirmPassword}
            />

            <ForgetPasswordField/>
        </FloatForm>
    );
}

export default PasswordUpdateForm;