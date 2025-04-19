import InputField from "../UI/InputField.jsx";
import Button from "../UI/Button.jsx";
import {useForm} from "react-hook-form";
import SelectField from "../UI/SelectField.jsx";

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

    return <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                    <InputField type="text" placeholder="Full Name" autoComplete="name" register={register("name", {
                        required: "Name is required",
                        pattern: {value: /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/, message: "Invalid Name"},
                    })} errors={errors.name} autoFocus={true}/>
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

                    <SelectField register={register("course", {
                        required: "Course is required",
                    })} list={years} errors={errors.course}/>
                    <Button text="Sign up" isSubmitting={isSubmitting}/>
                </div>
            </form>
}

export default SignupForm;