import InputField from "../../components/Fields/InputField";
import Button from "../../components/Buttons/Button";
import {useForm} from "react-hook-form";
import SocialButton from "../../components/others/SocialButton.jsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import GithubIcon from "../../components/icons/GithubIcon";
import GoogleIcon from "../../components/icons/GoogleIcon";
import LinkField from "../../components/Fields/LinkField";
import Divider from "../../components/Divider";
import {useMutation} from "@tanstack/react-query";
import {SignUpReq} from "../../types/Requests";
import {JSX} from "react";
import {signup} from "../../services/authService";

function SignupForm(): JSX.Element {
    const {
        register, handleSubmit, reset,
        setError, formState: {errors, isSubmitting},
    } = useForm<SignUpReq>({
        defaultValues: {
            name: "John Doe",
            email: "john1@gmail.com",
            password: "John@123",
        }
    });

    const navigate: NavigateFunction = useNavigate();

    const {mutate, isPending} = useMutation({
        mutationFn: signup,
        onSuccess: data => {
            console.log("data", data);
            navigate(`/check-email?from=signup&userId=${data?.user?.id}`);
        },

        onError: error => {
            console.log("error", error);
        }
    });

    async function onSubmit(data: SignUpReq) {
        mutate(data);
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
                    <Button className="!w-full" type="submit" text="Sign up" isSubmitting={isPending}/>
                </div>
            </form>

            <LinkField label="Already have an account" to="/auth/sign-in" linkText="Sign in"
                       className="text-md text-start"/>
        </div>
    );
}

export default SignupForm;