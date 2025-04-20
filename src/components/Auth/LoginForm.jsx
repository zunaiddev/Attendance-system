import {useForm} from "react-hook-form";
import SocialButton from "../UI/SocialButton.jsx";
import InputField from "../UI/InputField.jsx";
import Checkbox from "../UI/Checkbox.jsx";
import Button from "../UI/Button.jsx";
import {Link} from "react-router-dom";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm();

    async function onSubmit(data) {
        await new Promise(res => setTimeout(res, 2000));
        console.log(data);
    }

    return (
        <div className="w-full h-full space-y-9">
            <div className="space-y-8">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <div className="flex gap-2">
                    <SocialButton text="Sign in with Google" icon="Google"/>
                    <SocialButton text="Sign in with Github" icon="Github"/>
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
                    <InputField label="Email" type="email" placeholder="demo@demo.com" autoComplete="email"
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
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/,
                                        message: "Weak Password"
                                    },
                                })} errors={errors.password}/>
                    <div className="flex justify-between">
                        <Checkbox text="Remember me" register={register("terms")} errors={errors.terms}/>
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

export default LoginForm;