import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import FloatForm from "./FloatForm";
import ProfileInput from "../Fields/ProfileInput";
import ForgetPasswordField from "./ForgetPasswordField";

interface Props {
    hideForm: () => void;
}

function EmailUpdateForm({hideForm}: Props) {
    const [disable, setDisable] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting},
    } = useForm({});

    const newEmail = watch("newEmail");
    const password = watch("password");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        setDisable(!newEmail && !password);
    }, [newEmail, password]);

    const onSubmit = (data: any) => {
        console.log("Email update data:", data);
    };

    const handleHide = () => {
        if (isSubmitting) return;
        hideForm();
    };

    return (
        <FloatForm title="Change Email" desc="Enter your new email and password to confirm"
                   isSubmitting={isSubmitting} isDisabled={disable} onHide={handleHide}
                   onSubmit={handleSubmit(onSubmit)} gridCols={1}>
            <ProfileInput
                label="New Email"
                placeholder="Enter your email"
                register={register("email", {
                    required: "New email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                    },
                })}
                error={errors.newEmail}
            />

            <ProfileInput
                label="Confirm Password"
                type="password"
                placeholder="Enter Your Password"
                register={register("password", {
                    required: "Password is required",
                })}
                error={errors.password}
            />
            <ForgetPasswordField/>
        </FloatForm>
    );
}

export default EmailUpdateForm;