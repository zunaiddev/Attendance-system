import {useForm} from "react-hook-form";
import User from "../../types/User";
import Role from "../../types/Role";
import FloatForm from "./FloatForm";
import ProfileInput from "../Fields/ProfileInput";
import ProfileSelect from "../Fields/ProfileSelectField";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {updateUser} from "../../services/userService";
import {UserUpdateReq} from "../../types/UserUpdateReq";

interface Props {
    user: User;
    hideForm: () => void;
}

function UserUpdateForm({user, hideForm}: Props) {
    const {
        register,
        formState: {errors, isSubmitting, isDirty},
        handleSubmit,
    } = useForm<UserUpdateReq>({
        defaultValues: {
            name: user.name,
            username: user.username,
            role: user.role
        }
    });

    const client: QueryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: (data: UserUpdateReq) => updateUser(data),
    });

    function onSubmit(formData: UserUpdateReq) {
        console.log(formData);
        mutate(formData, {
            onSuccess: (data: User) => {
                client.setQueriesData(["user"], (prev: User) => {
                    prev.name = data.name;
                    prev.username = data.username;
                    prev.role = data.role;

                    return prev;
                });
            }
        });
    }

    function handleHide() {
        if (isSubmitting) return;
        hideForm();
    }

    return (
        <FloatForm title="Edit Profile" desc="Update your profile information" subTitle="Personal Information"
                   onSubmit={handleSubmit(onSubmit)} onHide={handleHide} isSubmitting={isSubmitting}
                   isDisabled={!isDirty}>
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