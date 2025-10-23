import Button from "../../components/Buttons/Button.tsx";
import {useSearchParams} from "react-router-dom";
import MailIcon from "../../components/icons/MailIcon.jsx";
import {useEffect, useMemo, useRef, useState} from "react";
import LinkField from "../../components/Fields/LinkField.tsx";
import {useMutation} from "@tanstack/react-query";
import SomethingWentWrong from "../../components/others/SomethingWentWrong.jsx";
import fakeResponse from "../../utils/fakeResponse.js";

function CheckEmail() {
    const [params] = useSearchParams();
    const {id, email} = useMemo(() => {
        return {id: params.get("id"), email: params.get("email")}
    }, [params]);

    const timerRef = useRef(null);
    const [timeLeft, setTimeLeft] =
        useState(Number.parseInt(localStorage.getItem("RESEND_EMAIL_TIME_LEFT")) ?? -1);

    const {mutate, isPending} = useMutation({
        mutationFn: fakeResponse,

        onSuccess: () => {
            localStorage.setItem("RESEND_EMAIL_TIME_LEFT", '59');
            setTimeLeft(59);
        },

        onError: error => {
            console.log("Error: ", error);
        }
    });

    useEffect(() => {
        console.log("User id", id);

    }, [id]);

    useEffect(() => {
        if (timeLeft < 0) return;

        let intervalId = setInterval(function () {
            setTimeLeft(prev => {
                localStorage.setItem("RESEND_EMAIL_TIME_LEFT", (prev - 1).toString());
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    function handleOnClick() {
        mutate(500);
    }

    if (!id) return <SomethingWentWrong message="User id is Missing"/>;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8 max-w-md mx-auto px-4">
            <div className="text-center space-y-4">
                <MailIcon className="size-15 mx-auto text-blue-500"/>
                <h1 className="text-3xl font-bold">Verify your email</h1>
                <p className="text-gray-400">
                    We've sent a verification link to {email ?? "your email address"}.
                    Please check your inbox and click the link to
                    verify your account.
                </p>
                <p className="text-sm text-gray-500">
                    If you don't see the email, please check your spam folder.
                </p>
            </div>

            <div className="w-full space-y-1">
                    <Button
                        className="w-full"
                        text={timeLeft >= 0 ? `Resend Email in 00:${timeLeft <= 9 ? '0' : ''}${timeLeft}` : "Resend verification email"}
                        isSubmitting={isPending}
                        onClick={handleOnClick}
                        disable={timeLeft >= 0}
                        ref={timerRef}
                    />
                <LinkField to="/auth/login" label="or" linkText="Sign in"/>
            </div>
        </div>
    );
}

export default CheckEmail;