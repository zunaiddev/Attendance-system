import {useForm} from "react-hook-form";
import SocialButton from "../../components/others/SocialButton.jsx";
import InputField from "../../components/Fields/InputField.tsx";
import Checkbox from "../../components/others/Checkbox.jsx";
import Button from "../../components/Buttons/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "../../components/Toaster/Toaster.tsx";
import GoogleIcon from "../../components/icons/GoogleIcon.jsx";
import GithubIcon from "../../components/icons/GithubIcon.jsx";
import usePost from "../../hooks/usePost.tsx";
import {HttpStatusCode} from "axios";
import storage from "../../services/storage.js";
import LinkField from "../../components/Fields/LinkField.tsx";
import Divider from "../../components/Divider.tsx";

function SignIn() {
    const {
        register,
        handleSubmit,
        reset,
        resetField,
        formState: {errors, isSubmitting},
    } = useForm({defaultValues: {email: "john@gmail.com", password: "John@123"}});
    const nav = useNavigate();
    const [post] = usePost();

    async function onSubmit(formData) {
        let {data, error} = await post("/auth/login", formData);

        if (error) {
            if (error.status === HttpStatusCode.Unauthorized) {
                resetField("password");
                toast.error("Invalid Email Or Password");
                return;
            }

            if (error.code === "DISABLED_USER") {
                toast.error("Please Verify Your Email or Signup again");
                return;
            }

            if (error.code === "LOCKED_USER") {
                toast.error("You are locked");
                return;
            }

            toast.error("Something went wrong");
            return;
        }

        localStorage.setItem("remember", formData.remember.toString());

        storage.saveItem("token", data.token);

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
                <Divider/>
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
                                })} error={errors.email}/>

                    <InputField label="Password" type="password" placeholder="Password" autoComplete="password"
                                register={register("password", {
                                    required: "Password is required"
                                })} error={errors.password}/>
                    <div className="flex justify-between">
                        <Checkbox text="Remember me" register={register("remember")} errors={errors.remember}/>
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot
                            password?</Link>
                    </div>

                    <Button className="!w-full" type="submit" text="Sign in" isSubmitting={isSubmitting}/>
                </div>
            </form>

            <LinkField label="Don't have an account" to="/auth/sign-up" linkText="Sign up"
                       className="text-md text-start"/>
        </div>
    );
}

export default SignIn;