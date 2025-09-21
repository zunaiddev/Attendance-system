import {FieldError, FieldErrors, Merge, UseFormRegisterReturn} from "react-hook-form";
import {twMerge} from "tailwind-merge";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import {JSX} from "react";

type SelectFieldProp = {
    label?: string
    list: Array<string> | Array<number> | Array<{
        value: string | number,
        text: string
    }>;
    defaultOpt?: string | number;
    className?: string;
    register: UseFormRegisterReturn;
    error: FieldError | Merge<FieldError, FieldErrors<any>> | undefined;
}

function SelectField({
                         list,
                         label,
                         register,
                         error,
                         defaultOpt = "Select...",
                         className
                     }: SelectFieldProp): JSX.Element {
    return (
        <div className="w-full flex flex-col">
            {label && <label className="block mb-2 text-sm font-medium text-gray-300">{label}</label>}
            <div className="relative bg-gray-700 rounded">
                <select {...register} defaultValue=""
                        className={twMerge(`w-full border rounded-sm py-3 px-3 outline-none border-gray-400 cursor-pointer appearance-none ${error && "border border-red-500"}`, className)}>
                    <option className="bg-gray-700" value="" disabled>{defaultOpt}</option>
                    {list.map((item, index) => (typeof item == "string" || typeof item == "number") ?
                        <option className="bg-gray-700" key={index} value={item}>{item}</option> :
                        <option className="bg-gray-700" key={index} value={item.value}>{item.text}</option>
                    )}
                </select>
                <ArrowDownIcon
                    className="size-6 text-white absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"/>
            </div>

            {error?.message && <span className="text-[12px] ml-1 text-red-600 mt-1">{error.message as string}</span>}
        </div>
    );
}

export default SelectField;