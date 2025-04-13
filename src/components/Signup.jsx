import InputField from "./common/InputField.jsx";
import LinkField from "./common/LinkField.jsx";
import Button from "./common/Button.jsx";
import {FaGithub} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {useForm} from "react-hook-form";

function Signup() {
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
        <div
            className="flex flex-col bg-[var(--bg-color)] py-5 px-7  rounded-lg gap-4 shadow-sm shadow-gray-100 w-90">
            <div className="flex justify-center">
                <h1 className="heading">Become A Member</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                    <InputField type="text" placeholder="Name" autoComplete="name" register={register("name", {
                        required: "Name is required",
                        pattern: {value: /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/, message: "Invalid Name"},
                    })} errors={errors.name}/>
                    <InputField type="email" placeholder="Email" autoComplete="email" register={register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]{2,64}@[a-zA-Z0-9.-]{2,255}\.[a-zA-Z]{2,}$/,
                            message: "Invalid Email"
                        },
                    })} errors={errors.email}/>
                    <InputField type="password" placeholder="Password" autoComplete="password"
                                register={register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/,
                                        message: "Weak Password"
                                    },
                                })} errors={errors.password}/>
                    <Button text="Sign up" isSubmitting={isSubmitting}/>
                </div>
            </form>
            <LinkField to="/" text="Home page"/>
            <div className="flex justify-center gap-9 justify-self-end mt-40">
                <center className="cursor-pointer">
                    <FcGoogle className="size-6"/>
                    <span>Google</span>
                </center>
                <center className="cursor-pointer">
                    <FaGithub className="size-6 mb-1"/>
                    <span>Github</span>
                </center>
            </div>
        </div>
    );
}

export default Signup;