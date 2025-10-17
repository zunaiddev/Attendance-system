import usePost from "../hooks/usePost.tsx";
import {useCallback, useEffect, useState} from "react";
import {Navigate, useNavigate, useSearchParams} from "react-router-dom";
import MainLoader from "../loader/MainLoader.jsx";
import {useForm} from "react-hook-form";
import InputField from "../components/Fields/InputField.tsx";
import Button from "../components/Buttons/Button.tsx";
import {extractClaims} from "../services/jwt.js";
import {toast} from "../components/Toaster/Toaster.js";

function Verify() {
    const [params] = useSearchParams();
    const [post, loading] = usePost();
    const [resetPassword, setResetPassword] = useState(null);
    const [resetToken, setResetToken] = useState("");
    const navigate = useCallback(text => {
        console.log("navigated to ", text);
    }, []);

    useEffect(() => {
        let token = params.get("token");
        setResetToken(token);

        if (!token) {
            toast.error("Token not found");
            return;
        }

        let claims = extractClaims(token);

        if (!claims) {
            toast.error("Invalid token");
            navigate("/auth/login");
            return;
        }

        if (claims.exp > new Date().getTime()) {
            toast.error("Token Has Expired.");
            navigate("/auth/login");
            return;
        }

        let purpose = claims.purpose;

        if (!purpose) {
            toast.error("Invalid token");
            navigate("/auth/login");
            return;
        }

        if (purpose !== "VERIFY_USER" && purpose !== "UPDATE_EMAIL" && purpose !== "RESET_PASSWORD") {
            toast.error("This Token Is not Allowed here.");
            navigate("/auth/login");
            return;
        }

        setResetPassword(purpose === "RESET_PASSWORD");
    }, [navigate, params]);

    useEffect(() => {
        if (resetPassword == null) {
            return;
        }

        (async function () {
            if (!resetPassword) {
                let {data, error} = await post("/verify", undefined, params.get("token"));

                if (error) {
                    if (error.code === "USED_TOKEN") {
                        toast.success("User Is Already Verified.");
                        return;
                    }

                    toast.error("Something went wrong.");
                    return;
                }

                localStorage.setItem("token", data?.token);
                localStorage.setItem("remember", "true");

                toast.success("Verification Successful!");
            }
        })();
    }, [params, post, resetPassword]);

    if (loading) {
        return <MainLoader/>;
    }

    if (resetPassword) {
        return <ResetPassword token={resetToken}/>;
    }

    return <Navigate to={"/dashboard"}/>;
}


function ResetPassword({token}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
        watch
    } = useForm();
    const [post] = usePost();
    const navigate = useNavigate();

    async function onSubmit(formData) {
        let {error} = await post("/verify", formData, token);

        if (error) {
            if (error.code === "SAME_PASSWORD") {
                toast.error("This Password Currently In use.");
                return;
            }

            toast.error("Something went wrong");
            return;
        }

        reset();
        navigate("/auth/login");
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-90 max-w-2xl space-y-9">
                <div className="space-y-8">
                    <div className="flex items-center space-x-3">
                        <i className="fas fa-lock text-3xl text-blue-500"></i>
                        <h1 className="text-3xl font-bold">Reset Password</h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}
                      className="transition-all duration-300 hover:shadow-lg p-6 rounded-lg border border-gray-700">
                    <div className="space-y-4">
                        <InputField
                            label="New Password"
                            autoComplete="password"
                            autoFocus={true}
                            type="password"
                            register={register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/,
                                    message: "Weak Password"
                                },
                            })}
                            error={errors.password}
                        />
                        <InputField
                            label="Confirm Password"
                            autoComplete="new-password"
                            autoFocus={true}
                            type="password"
                            register={register("confirmPassword", {
                                required: "Password Does Not Match",
                                validate: value => value === watch("password") || "Password Does Not Match",
                            })}
                            error={errors.confirmPassword}
                        />
                        <Button text="Reset" isSubmitting={isSubmitting}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Verify;