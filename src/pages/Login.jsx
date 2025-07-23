import {useForm} from "react-hook-form";
import SocialButton from "../components/others/SocialButton.jsx";
import InputField from "../components/others/InputField.jsx";
import Checkbox from "../components/others/Checkbox.jsx";
import Button from "../components/others/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {showToast} from "../components/Toaster/Toaster.jsx";
import GoogleIcon from "../components/icons/GoogleIcon.jsx";
import GithubIcon from "../components/icons/GithubIcon.jsx";
import usePost from "../hooks/usePost.jsx";
import {HttpStatusCode} from "axios";

function Login() {
    const {
        register,
        handleSubmit,
        reset,
        resetField,
        formState: {errors, isSubmitting},
    } = useForm({defaultValues: {email: "john@gmail.com", password: "John@123"}});
    const nav = useNavigate();
    const {post} = usePost();

    async function onSubmit(formData) {
        let {data, error} = await post("/auth/login", formData);

        if (error) {
            if (error.status === HttpStatusCode.Unauthorized) {
                resetField("password");
                showToast.error("Invalid Email Or Password");
                return;
            }

            if (error.code === "DISABLED_USER") {
                showToast.error("Please Verify Your Email or Signup again");
                return;
            }

            if (error.code === "LOCKED_USER") {
                showToast.error("You are locked");
                return;
            }

            showToast.error("Something went wrong");
            return;
        }

        let rememberMe = formData.remember;
        let token = data.token;

        localStorage.setItem("remember", rememberMe.toString());

        if (rememberMe) {
            localStorage.setItem("token", token);
        } else {
            sessionStorage.setItem("token", token);
        }

        reset();
        nav("/dashboard", {replace: true});
    }

    return (
        <div className="w-full h-full space-y-9">
            <div className="space-y-8">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <div className="flex justify-between">
                    <SocialButton text="Sign in with Google" icon={GoogleIcon}/>
                    <SocialButton text="Sign in with Github" icon={GithubIcon}/>
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
                    <InputField label="Email" placeholder="demo@demo.com" autoComplete="email"
                                autoFocus={true}
                                register={register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]{2,64}@[a-zA-Z0-9.-]{2,255}\.[a-zA-Z]{2,}$/,
                                        message: "Invalid Email"
                                    },
                                })} errors={errors.email}/>

                    <InputField label="Password" type="password" placeholder="Password" autoComplete="password"
                                register={register("password", {
                                    required: "Password is required"
                                })} errors={errors.password}/>
                    <div className="flex justify-between">
                        <Checkbox text="Remember me" register={register("remember")} errors={errors.remember}/>
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot
                            password?</Link>
                    </div>

                    <Button text="Sign in" isSubmitting={isSubmitting}/>
                </div>
            </form>

            <div>
                Don't have an account?&nbsp;
                <Link to="/auth/signup" className="text-blue-500 hover:underline">sign up here</Link>
            </div>
        </div>
    );
}

export default Login;