import usePost from "../hooks/usePost.jsx";
import {useEffect, useState} from "react";
import {Navigate, useNavigate, useSearchParams} from "react-router-dom";
import MainLoader from "../loader/MainLoader.jsx";
import {showToast} from "../components/Toaster/Toaster.jsx";
import {useForm} from "react-hook-form";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import {extractClaims} from "../services/jwt.js";

function Verify() {
    const [params] = useSearchParams();
    const {post, loading} = usePost();
    const [resetPassword, setResetPassword] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            let token = params.get("token")

            if (!token) {
                navigate("/not-found");
                return;
            }

            let claims = extractClaims(token);

            if (!claims) {
                showToast.error("Invalid token");
                navigate("/auth/login");
                return;
            }

            if (claims.exp > new Date().getTime()) {
                showToast.error("Token Has Expired.");
                navigate("/auth/login");
                return;
            }

            console.log(claims);

            let purpose = claims.purpose;

            if (!purpose) {
                showToast.error("Invalid token");
                navigate("/auth/login");
                return;
            }

            if (purpose !== "VERIFY_USER" && purpose !== "UPDATE_EMAIL" && purpose !== "RESET_PASSWORD") {
                showToast.error("This Token Is not Allowed here.");
                navigate("/auth/login");
                return;
            }

            setResetPassword(purpose === "RESET_PASSWORD");
        })();
    }, []);

    useEffect(() => {
        (async function () {
            if (resetPassword == null) {
                return;
            }

            if (!resetPassword) {
                let data = await post("/verify", undefined, params.get("token"));

                if (!data) {
                    showToast.error("Something went wrong");
                }
            }
        })();
    }, [resetPassword])

    if (loading) {
        return <MainLoader/>;
    }

    if (resetPassword) {
        return <ResetPassword/>;
    }

    return <Navigate to={"/auth/login"}/>;
}


function ResetPassword({token}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
        watch
    } = useForm();
    const {post, error} = usePost();
    const navigate = useNavigate();

    async function onSubmit(formData) {
        let data = await post("/verify", formData, token);

        if (!data) {
            if (error.code === "SAME_PASSWORD") {
                showToast.error("This Password Currently In use.");
                return;
            }

            showToast.error("Something went wrong");
        }

        reset();
        navigate("/auth/login");
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-md space-y-9">
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
                            register={register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/,
                                    message: "Weak Password"
                                },
                            })}
                            errors={errors.password}
                        />
                        <InputField
                            label="Confirm Password"
                            autoComplete="new-password"
                            autoFocus={true}
                            register={register("confirmPassword", {
                                required: "Password Does Not Match",
                                validate: value => value === watch("password") || "Password Does Not Match",
                            })}
                            errors={errors.confirmPassword}
                        />
                        <Button text="Reset" isSubmitting={isSubmitting}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Verify;