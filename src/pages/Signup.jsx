import InputField from "../components/others/InputField.tsx";
import Button from "../components/others/Button.tsx";
import {useForm} from "react-hook-form";
import SocialButton from "../components/others/SocialButton.jsx";
import {Link, useNavigate} from "react-router-dom";
import GithubIcon from "../components/icons/GithubIcon.jsx";
import GoogleIcon from "../components/icons/GoogleIcon.jsx";
import usePost from "../hooks/usePost.tsx";
import {HttpStatusCode} from "axios";
import {toast} from "../components/Toaster/Toaster.tsx";

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
    const {post} = usePost();
    const navigate = useNavigate();

    async function onSubmit(formData) {
        const {data, error} = await post("/auth/signup", formData);

        if (error) {
            if (error.status === HttpStatusCode.Conflict) {
                setError("email", {message: "Email already exists"});
                return;
            }

            toast.error("Something went wrong. Please try again later.");
            return;
        }

        reset();
        navigate(`/check-email?from=signup&userId=${data?.user?.id}`);
    }

    return (
        <div className="w-full h-full space-y-9">
            <div className="space-y-8">
                <h1 className="text-3xl font-bold">Create Free Account</h1>
                <div className="flex flex-col gap-3 sm:flex-row justify-between">
                    <SocialButton text="Sign up with Google" icon={GoogleIcon}/>
                    <SocialButton text="Sign up with Github" icon={GithubIcon}/>
                </div>
                <div className="relative my-4">
                    <hr/>
                    <span
                        className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-5">
                    or
                </span>
                </div>
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

            <div>
                Already have an account?&nbsp;
                <Link to="/auth/login" className="text-blue-500 hover:underline">login here</Link>
            </div>
        </div>
    );
}

export default SignupForm;