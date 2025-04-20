import InputField from "../UI/InputField.jsx";
import Button from "../UI/Button.jsx";
import {useForm} from "react-hook-form";
import SocialButton from "../UI/SocialButton.jsx";
import Checkbox from "../UI/Checkbox.jsx";
import {Link} from "react-router-dom";

function SignupForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm();

    const allCourses = [
        // 🔧 Technical / IT
        "BCA", "B.Tech", "B.E", "B.Sc CS", "B.Sc IT", "MCA", "M.Tech", "M.Sc CS", "PGDCA",

        // 📚 Arts / Humanities
        "BA", "MA", "BFA", "MFA", "BSW", "MSW",

        // 🧪 Science
        "B.Sc", "M.Sc", "B.Sc Physics", "B.Sc Chemistry", "B.Sc Maths", "B.Sc Biology",

        // 💼 Commerce / Management
        "B.Com", "M.Com", "BBA", "MBA", "BBM", "CA", "CMA", "CS",

        // 🏥 Medical / Health
        "MBBS", "BDS", "BAMS", "BHMS", "BPT", "B.Sc Nursing", "Pharm D", "B.Pharm", "M.Pharm",

        // ⚖️ Law
        "LLB", "LLM", "BA LLB", "BBA LLB",

        // 🎨 Design / Media
        "B.Des", "M.Des", "BMM", "BJMC", "MJMC", "BFD", "Animation", "Graphics Design",

        // ✈️ Others
        "Hotel Management", "Travel & Tourism", "Mass Communication", "Event Management", "Fine Arts", "Fashion Design"
    ];

    const years = ["1st", "2nd", "3rd", "4th"];

    async function onSubmit(data) {
        await new Promise(res => setTimeout(res, 2000));
        console.log(data);
    }

    return (
        <div className="w-full h-full space-y-9">
            <div className="space-y-8">
                <h1 className="text-3xl font-bold">Create Free Account</h1>
                <div className="flex gap-2">
                    <SocialButton text="Sign up with Google" icon="Google"/>
                    <SocialButton text="Sign up with Github" icon="Github"/>
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
                    <InputField label="Full Name" type="text" placeholder="John Doe" autoComplete="name"
                                register={register("name", {
                        required: "Name is required",
                        pattern: {value: /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/, message: "Invalid Name"},
                    })} errors={errors.name} autoFocus={true}/>
                    <InputField label="Email" type="email" placeholder="demo@demo.com" autoComplete="email"
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
                    <Checkbox text="I agree to the" link="Terms & Conditions" to="/terms" register={
                        register("terms", {required: "Terms & Conditions is required"})
                    } errors={errors.terms}/>
                    <Button text="Sign up" isSubmitting={isSubmitting}/>
                </div>
            </form>

            <div>
                Already have an account?&nbsp;
                <Link to="/auth/login" className="text-blue-500 hover:underline">login here</Link>
            </div>
        </div>
    );
}

export default SignupForm;