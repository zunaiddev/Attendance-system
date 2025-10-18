import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import FloatForm from "./FloatForm";
import ProfileInput from "../Fields/ProfileInput";
import ForgetPasswordField from "./ForgetPasswordField";

interface Props {
    hideForm: () => void;
}

function PasswordUpdateForm({hideForm}: Props) {
    const [disabled, setDisabled] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting, isValid},
    } = useForm();

    const currentPassword = watch("currentPassword");
    const newPassword = watch("newPassword");
    const confirmNewPassword = watch("confirmNewPassword");


    useEffect(() => {

    }, [currentPassword, newPassword, confirmNewPassword]);

    const onSubmit = (data: any) => {
        console.log("Password update data:", data);
        // Call API here
    };

    const handleHide = () => {
        if (isSubmitting) return;
        hideForm();
    };

    return (<FloatForm isSubmitting={isSubmitting} isDisabled={disabled} onHide={handleHide}
                       onSubmit={handleSubmit(onSubmit)} gridCols={1}>

            <ProfileInput
                label="Current Password"
                type="password"
                register={register("currentPassword", {
                    required: "Current password is required",
                })}
                error={errors.currentPassword}
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
                register={register("confirmNewPassword", {
                    required: "Please confirm your new password",
                    validate: value =>
                        value === newPassword || "Passwords do not match",
                })}
                error={errors.confirmNewPassword}
            />

            <ForgetPasswordField/>
        </FloatForm>
    );
}

export default PasswordUpdateForm;