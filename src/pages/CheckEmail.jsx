import Button from "../components/Buttons/Button.tsx";
import {useSearchParams} from "react-router-dom";
import MailIcon from "../components/icons/MailIcon.jsx";
import usePost from "../hooks/usePost.tsx";
import {toast} from "../components/Toaster/Toaster.tsx";
import {useEffect, useRef, useState} from "react";
import LinkField from "../components/Fields/LinkField.tsx";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";

function CheckEmail() {
    const [params] = useSearchParams();
    const from = params.get("from");
    const userId = params.get("userId");
    const [post, loading] = usePost();
    const timerRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState(Number.parseInt(localStorage.getItem("RESEND_EMAIL_TIME_LEFT")) ?? -1);
    const [somethingWrong, setSomethingWrong] = useState(false);

    useEffect(() => {
        if (!userId && from === "signup") {
            toast.error("Missing User id.");
            setSomethingWrong(true);
            return;
        }

        if (timeLeft < 0) return;

        let id = setInterval(function () {
            setTimeLeft(prev => {
                localStorage.setItem("RESEND_EMAIL_TIME_LEFT", (prev - 1).toString());
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(id);
    }, [from, timeLeft, userId]);

    const handleResendEmail = async () => {
        let {data, error} = await post(`/auth/resend-email/${userId}`);

        if (error) {
            toast.error("Something went wrong");
            return;
        }

        toast.success(`Email sent to ${data.email}`);
        localStorage.setItem("RESEND_EMAIL_TIME_LEFT", '59');
        setTimeLeft(59);
    };

    if (somethingWrong) {
        return <SomethingWentWrong/>;
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8 max-w-md mx-auto px-4">
            <div className="text-center space-y-4">
                <MailIcon className="size-15 mx-auto text-blue-500"/>
                <h1 className="text-3xl font-bold">Verify your email</h1>
                <p className="text-gray-400">
                    {
                        from === "signup" ?
                            "We've sent a verification link to your email address. Please check your inbox and click the link to verify your account." :
                            "We've sent a verification link to your email address. Please check your inbox and click the link to reset your password."
                    }
                </p>
                <p className="text-sm text-gray-500">
                    If you don't see the email, please check your spam folder.
                </p>
            </div>

            {
                from === "signup" && <div className="w-full space-y-1">
                    <Button
                        className="!w-full"
                        text={timeLeft >= 0 ? `Resend Email in 00:${timeLeft <= 9 ? '0' : ''}${timeLeft}` : "Resend verification email"}
                        isSubmitting={loading}
                        onClick={handleResendEmail}
                        disable={timeLeft >= 0}
                        ref={timerRef}
                    />
                    <LinkField to="/auth/login" text="or login" underline={true}/>
                </div>
            }
        </div>
    );
}

export default CheckEmail;