import {Link} from "react-router-dom";
import Button from "../components/UI/Button.jsx";

function ResetPasswordEmail() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="max-w-md text-center space-y-9">
                <div className="space-y-8">
                    <h1 className="text-3xl font-bold">Check your email</h1>
                    <p className="text-gray-400">
                        We have sent a password reset link to your email address. Please check your inbox and follow the
                        instructions to reset your password.
                    </p>
                </div>
                <div className="space-y-4">
                    <Link to="/auth/login">
                        <Button text="Back to LoginPage"/>
                    </Link>
                    <p className="text-sm text-gray-400">
                        Didn't receive the email? Check your spam folder or try requesting again.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordEmail;