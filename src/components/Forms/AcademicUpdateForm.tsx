import {useForm} from "react-hook-form";
import {useEffect} from "react";
import Academic from "../../types/Academic";
import {courses} from "../../Data/courses";
import {semesters} from "../../Data/semesters";
import {years} from "../../Data/years";
import ProfileInput from "../Fields/ProfileInput";
import ProfileSelectField from "../Fields/ProfileSelectField";
import FloatForm from "./FloatForm";

interface Props {
    academic: Academic;
    hideForm: () => void;
}

function AcademicUpdateForm({academic, hideForm}: Props) {
    const {
        register,
        formState: {errors, isSubmitting, isDirty},
        handleSubmit,
    } = useForm({defaultValues: academic});

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);



    function onSubmit(data: any) {
        console.log(data);
    }

    function handleHide() {
        if (isSubmitting) return;
        hideForm();
    }

    return (
        <FloatForm title="Edit Academic" desc="Update your academic information" subTitle="Academic Informatoin"
                   isSubmitting={isSubmitting} isDisabled={!isDirty} onHide={handleHide}
                   onSubmit={handleSubmit(onSubmit)}>
            <ProfileInput label="Name"
                          register={register("university", {
                              required: "Please enter your name",
                              pattern: {
                                  value: /^[A-Za-z\s'-]+$/,
                                  message: "Please enter a valid name",
                              },
                              maxLength: {
                                  value: 30,
                                  message: "Too long"
                              },
                              validate: value => value.trim().length >= 3 || "Too short"
                          })} error={errors.university}/>


            <ProfileInput label="Section"
                          register={register("section")}
                          error={errors.section}/>

            <ProfileSelectField label="Course" list={courses}
                                register={register("course")}/>

            <ProfileSelectField label="Semester" list={semesters}
                                register={register("semester")}/>

            <ProfileSelectField label="Year" list={years}
                                register={register("year")}/>
        </FloatForm>
    );
}

export default AcademicUpdateForm;