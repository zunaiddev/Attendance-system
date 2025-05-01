import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import {useForm} from "react-hook-form";
import SocialButton from "../components/SocialButton.jsx";
import Checkbox from "../components/Checkbox.jsx";
import {Link, useNavigate} from "react-router-dom";
import GithubIcon from "../components/icons/GithubIcon.jsx";
import GoogleIcon from "../components/icons/GoogleIcon.jsx";

function SignupForm() {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {errors, isSubmitting},
    } = useForm();
    const navigate = useNavigate();

    async function onSubmit(formData) {
        await new Promise(res => setTimeout(res, 2000));

        if (formData.email === "zunaid@example.com") {
            setError("email", {message: "Email already taken", type: "manual"});
            return;
        }

        console.log(formData);
        reset();
        navigate("/check-email?from=signup");
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
                                })} errors={errors.name} autoFocus={true}/>
                    <InputField label="Email" type="email" placeholder="demo@demo.com" autoComplete="email"
                                register={register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]{2,64}@[a-zA-Z0-9.-]{2,255}\.[a-zA-Z]{2,}$/,
                                        message: "Invalid Email"
                                    },
                                })} errors={errors.email}/>

                    <InputField label="Password" type="password" placeholder="Password" autoComplete="password"
                                register={register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/,
                                        message: "Weak Password"
                                    },
                                })} errors={errors.password}/>
                    <Checkbox text="I agree to the" link="Terms & Conditions" to="/terms" register={
                        register("terms", {required: "Terms & Conditions is required"})
                    } errors={errors.terms}/>
                    <Button text="Sign up" isSubmitting={isSubmitting}/>
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