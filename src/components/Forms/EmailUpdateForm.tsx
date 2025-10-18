import Card from "../Cards/Card";
import InputField from "../Fields/InputField";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Button from "../Buttons/Button";
import {Save, X} from "lucide-react";

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
    } = useForm({
        defaultValues: {
            newEmail: "",
            password: "",
        },
    });

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
        // Call API here
    };

    const handleHide = () => {
        if (isSubmitting) return;
        hideForm();
    };

    return (
        <div className="h-screen bg-gray-700/50 flex justify-center items-center fixed inset-0" onClick={handleHide}>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl w-full relative"
                  onClick={e => e.stopPropagation()}>
                <Card title="Update Email" desc="Change your account email">
                    <div className="grid grid-cols-1 gap-6">
                        <InputField
                            label="New Email"
                            type="email"
                            register={register("newEmail", {
                                required: "New email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email",
                                },
                            })}
                            error={errors.newEmail}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            register={register("password", {
                                required: "Password is required",
                            })}
                            error={errors.password}
                        />
                    </div>

                    <div className="w-full flex justify-end items-center mt-6">
                        <Button text="Cancel" disable={isSubmitting} onClick={handleHide}
                                className="bg-transparent border py-2 hover:bg-white hover:text-gray-800 disabled:text-gray-800 disabled:bg-gray-300/40"/>
                        <Button text="Update Email" icon={Save}
                                className="bg-white text-gray-800 border py-2 hover:bg-gray-300 disabled:text-gray-700 disabled:bg-gray-100/70"
                                isSubmitting={isSubmitting} disable={disable}/>
                    </div>
                </Card>
                <button className="text-white absolute right-3 top-3 cursor-pointer disabled:cursor-not-allowed"
                        onClick={handleHide} disabled={isSubmitting}>
                    <X/>
                </button>
            </form>
        </div>
    );
}

export default EmailUpdateForm;