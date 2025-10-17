import Card from "../Cards/Card";
import InputField from "../Fields/InputField";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import Button from "../Buttons/Button";
import {Save, X} from "lucide-react";

function ProfileForm() {
    const {
        register, errors
    } = useForm();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <div className="h-screen bg-gray-700/50 flex justify-center items-center absolute inset-0">
            <form onSubmit={e => e.preventDefault()} className="max-w-xl w-full relative">
                <Card title="Edit Profile" desc="Update your profile information and academic details">
                    <Card title="Personal Information" className="p-0">
                        <div className="grid grid-cols-2 gap-6">
                            <InputField label="Name" register={register("name")}/>
                            <InputField label="Username" register={register("username")}/>
                            <InputField label="Role" register={register("course")}/>
                        </div>
                    </Card>
                    <hr className="my-8"/>

                    <Card title="Academic Information" className="p-0">
                        <div className="grid grid-cols-2 gap-6">
                            <InputField label="University" register={register("university")}/>
                            <InputField label="Course" register={register("username")}/>
                            <InputField label="Section" register={register("course")}/>
                            <InputField label="Semester" register={register("course")}/>
                            <InputField label="Year" register={register("course")}/>
                        </div>

                    </Card>
                    <div className="w-full flex justify-end items-center mt-10">
                        <Button text="Cancel"
                                className="bg-transparent border py-2 hover:bg-white hover:text-gray-800"/>
                        <Button text="Save Changes" icon={Save}
                                className="bg-white text-gray-800 border py-2 hover:bg-gray-300"/>
                    </div>
                </Card>
                <X className="text-white absolute right-3 top-3 cursor-pointer"/>
            </form>
        </div>
    );
}

export default ProfileForm;