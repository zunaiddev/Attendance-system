import {FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn} from "react-hook-form";
import {JSX} from "react";
import InputField from "./InputField";

interface Props {
    label: string;
    register: UseFormRegisterReturn;
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    placeholder?: string;
    type?: "text" | "password";
}


function ProfileInput({label, register, error, placeholder, type = "text"}: Props): JSX.Element {
    return <InputField label={label} register={register} error={error} type={type} placeholder={placeholder}
                       className="flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm bg-gray-800 border-gray-700 text-white"
    />
}

export default ProfileInput;