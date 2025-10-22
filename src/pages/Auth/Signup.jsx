import InputField from "../../components/Fields/InputField.tsx";
import Button from "../../components/Buttons/Button.tsx";
import {useForm} from "react-hook-form";
import SocialButton from "../../components/others/SocialButton.jsx";
import {useNavigate} from "react-router-dom";
import GithubIcon from "../../components/icons/GithubIcon.jsx";
import GoogleIcon from "../../components/icons/GoogleIcon.jsx";
import LinkField from "../../components/Fields/LinkField.tsx";
import Divider from "../../components/Divider.tsx";
import {useMutation} from "@tanstack/react-query";
import {signUp} from "../../services/authService.js";

function SignupForm() {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: {
            name: "John Doe",
            email: "john@gmail.com",
            password: "John@123",
        }
    });
    const navigate = useNavigate();

    const {mutate, data} = useMutation({
        mutationFn: (req) => signUp(req)
    })

    async function onSubmit(formData) {
        await mutate(formData);

        reset();
        // navigate(`/check-email?from=signup&userId=${data?.user?.id}`);
    }

    return (
        <div className="w-full h-full space-y-9">
            <div className="space-y-8">
                <h1 className="text-3xl font-bold">Create Free Account</h1>
                <div className="flex flex-col gap-3 sm:flex-row justify-between">
                    <SocialButton text="Sign up with Google" icon={GoogleIcon}/>
                    <SocialButton text="Sign up with Github" icon={GithubIcon}/>
                </div>
                <Divider/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <InputField label="Full Name" type="text" placeholder="John Doe" autoComplete="name"
                                register={register("name", {
                                    required: "Name is required",
                                    pattern: {value: /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/, message: "Invalid Name"},
                                })} error={errors.name} autoFocus={true}/>
                    <InputField label="Email" type="text" placeholder="demo@demo.com" autoComplete="email"
                                register={register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]{2,64}@[a-zA-Z0-9.-]{2,255}\.[a-zA-Z]{2,}$/,
                                        message: "Invalid Email"
                                    },
                                })} error={errors.email}/>

                    <InputField label="Password" type="password" placeholder="Password" autoComplete="password"
                                register={register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/,
                                        message: "Weak Password"
                                    },
                                })} error={errors.password}/>
                    <Button className="!w-full" type="submit" text="Sign up" isSubmitting={isSubmitting}/>
                </div>
            </form>

            <LinkField label="Already have an account" to="/auth/sign-in" linkText="Sign in"
                       className="text-md text-start"/>
        </div>
    );
}

export default SignupForm;