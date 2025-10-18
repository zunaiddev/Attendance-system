import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
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
    const [disable, setDisable] = useState<boolean>(true);

    const {
        register,
        formState: {errors, isSubmitting},
        watch,
        handleSubmit,
    } = useForm({defaultValues: academic});

    const university: string = watch("university").trim();
    const course: string = watch("course");
    const section: string = watch("section").trim();
    const semester: number = watch("semester");
    const year: number = watch("year");

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    useEffect(() => {
        setDisable(university === academic.university
            && course === academic.course && section === academic.section &&
            semester === academic.semester && year === academic.year);
    }, [university, course, section, semester, year]);


    function onSubmit(data: any) {
        console.log(data);
    }

    function handleHide() {
        if (isSubmitting) return;
        hideForm();
    }

    return (
        <FloatForm isSubmitting={isSubmitting} isDisabled={disable} onHide={handleHide}
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