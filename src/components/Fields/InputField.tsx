import {HTMLInputAutoCompleteAttribute, useState} from "react";
import {FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn} from "react-hook-form";
import {twMerge} from "tailwind-merge";
import {Eye, EyeOff} from "lucide-react";

type InputFieldType = {
    label?: string | null,
    placeholder?: string | "",
    autoComplete?: HTMLInputAutoCompleteAttribute,
    type?: "text" | "email" | "number" | "password",
    register: UseFormRegisterReturn,
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    autoFocus?: boolean;
    className?: string;
}

function InputField({
                        label = null, placeholder = "", autoComplete, type = "text",
                        register, error, autoFocus = false, className
                    }: InputFieldType) {
    const [show, setShow] = useState<boolean>(false);

    function handleShow(): void {
        setShow(!show);
    }

    return (
        <div className="w-full flex flex-col">
            {label && <label className="block mb-1 text-sm font-medium text-gray-300">{label}</label>}
            <div className="relative">
                <input
                    className={twMerge(`shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 outline-none block w-full p-2.5 bg-gray-700 
                     placeholder-gray-400 text-white ${error && "border-red-600"} ${type === "password" && "pr-9"}`, className)}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    {...register}/>
                {type === "password" && (show ?
                        <div
                            className="absolute top-[50%] bottom-[50%] translate-y-[-50%] right-2 text-gray-400 size-5 cursor-pointer"
                            onClick={handleShow}>
                            <Eye size={20}/>
                        </div> :
                        <div
                            className="absolute top-[50%] bottom-[50%] translate-y-[-50%] right-2 text-gray-400 size-5 cursor-pointer"
                            onClick={handleShow}>
                            <EyeOff size={20}/>
                        </div>
                )}

            </div>

            {error?.message && <span className="text-[12px] ml-1 text-red-600 mt-1">{error.message as string}</span>}
        </div>
    );
}

export default InputField;