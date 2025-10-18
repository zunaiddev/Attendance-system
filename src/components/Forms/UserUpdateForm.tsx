import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import User from "../../types/User";
import Role from "../../types/Role";
import FloatForm from "./FloatForm";
import ProfileInput from "../Fields/ProfileInput";
import ProfileSelect from "../Fields/ProfileSelectField";

interface Props {
    user: User;
    hideForm: () => void;
}

function UserUpdateForm({user, hideForm}: Props) {
    const [disable, setDisable] = useState<boolean>(true);

    const {
        register,
        formState: {errors, isSubmitting},
        getValues,
        watch,
        handleSubmit,
    } = useForm({defaultValues: user});

    const name: string = watch("name");
    const username: string = watch("username");
    const role: Role = watch("role");

    useEffect(() => {
        setDisable(name === user.name && username === user.username && role === user.role);
    }, [name, username, role]);


    function onSubmit(data: any) {
        console.log(data);
    }

    function handleHide() {
        if (isSubmitting) return;
        hideForm();
    }

    return (
        <FloatForm onSubmit={handleSubmit(onSubmit)} onHide={handleHide} isSubmitting={isSubmitting}
                   isDisabled={disable}>
            <ProfileInput label="Name"
                          register={register("name", {
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
                          })} error={errors.name}/>
            <ProfileInput label="Username"
                          register={register("username", {
                              required: "Username is required",
                              pattern: {
                                  value: /^[a-zA-Z0-9._]+$/,
                                  message: "Please enter a valid username",
                              },
                              validate: value => value.trim().length >= 3 || "Too short",
                              maxLength: {
                                  value: 50,
                                  message: "Too long"
                              },
                          })} error={errors.username}/>
            <ProfileSelect label="Role" list={[{text: "Student", value: Role.STUDENT},
                {text: "Teacher", value: Role.TEACHER}]}
                           register={register("role", {
                               required: "Role is required",
                           })}/>
        </FloatForm>
    );
}

export default UserUpdateForm;