import {useForm} from "react-hook-form";
import InputField from "../UI/InputField.jsx";
import Button from "../UI/Button.jsx";
import {Link} from "react-router-dom";

function ForgetPasswordPage() {
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
                            type="email"
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

export default ForgetPasswordPage;