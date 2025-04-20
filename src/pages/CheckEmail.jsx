import {useState} from "react";
import {MdMarkEmailRead} from "react-icons/md";
import Button from "../components/UI/Button";

function CheckEmail() {
    const [isResending, setIsResending] = useState(false);

    const handleResendEmail = async () => {
        setIsResending(true);
        await new Promise(res => setTimeout(res, 2000));
        setIsResending(false);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8 max-w-md mx-auto px-4">
            <div className="text-center space-y-4">
                <MdMarkEmailRead className="w-24 h-24 mx-auto text-blue-500"/>
                <h1 className="text-3xl font-bold">Verify your email</h1>
                <p className="text-gray-400">
                    We've sent a verification link to your email address. Please check your inbox and click the link to
                    verify your account.
                </p>
                <p className="text-sm text-gray-500">
                    If you don't see the email, please check your spam folder.
                </p>
            </div>

            <div className="w-full space-y-4">
                <Button
                    text={isResending ? "Sending..." : "Resend verification email"}
                    isSubmitting={isResending}
                    onClick={handleResendEmail}
                />
            </div>
        </div>
    );
}

export default CheckEmail;