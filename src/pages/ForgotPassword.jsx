import {useForm} from "react-hook-form";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import {Link, useNavigate} from "react-router-dom";

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {errors, isSubmitting},
    } = useForm();
    const navigate = useNavigate();

    async function onSubmit(data) {
        await new Promise(res => setTimeout(res, 1000));
        if (data.email !== "zunaid@example.com") {
            setError("email", {message: "Email not found", type: "manual"});
            return;
        }

        reset();
        navigate("/check-email?from=forgot-password");
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-md space-y-9">
                <div className="space-y-8">
                    <div className="flex items-center space-x-3">
                        <i className="fas fa-lock text-3xl text-blue-500"></i>
                        <h1 className="text-3xl font-bold">Reset Password</h1>
                    </div>
                    <p className="text-gray-400 flex items-center space-x-2">
                        <i className="fas fa-info-circle text-blue-500"></i>
                        <span>Enter your email address and we'll send you instructions to reset your password.</span>
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}
                      className="transition-all duration-300 hover:shadow-lg p-6 rounded-lg border border-gray-700">
                    <div className="space-y-4">
                        <InputField
                            label="Email"
                            placeholder="demo@demo.com"
                            autoComplete="email"
                            autoFocus={true}
                            register={register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]{2,64}@[a-zA-Z0-9.-]{2,255}\.[a-zA-Z]{2,}$/,
                                    message: "Invalid Email"
                                },
                            })}
                            errors={errors.email}
                        />
                        <Button text="Send Reset Instructions" isSubmitting={isSubmitting}/>
                    </div>
                </form>

                <div className="flex items-center space-x-2">
                    <i className="fas fa-arrow-left text-blue-500"></i>
                    <span>Remember your password?</span>&nbsp;
                    <Link to="/auth/login"
                          className="text-blue-500 hover:underline hover:text-blue-600 transition-colors">
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;