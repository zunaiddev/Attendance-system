import {FieldError, FieldErrors, Merge, UseFormRegisterReturn} from "react-hook-form";
import {twMerge} from "tailwind-merge";
import {JSX} from "react";
import {ChevronDown} from "lucide-react";

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
    background?: string;
}

function SelectField({
                         list,
                         label,
                         register,
                         error,
                         defaultOpt = "Select...",
                         className,
                         background
                     }: SelectFieldProp): JSX.Element {
    return (
        <div className="w-full flex flex-col">
            {label && <label className="block mb-1 text-sm font-medium text-gray-300">{label}</label>}
            <div className={`relative ${background} rounded`}>
                <select {...register} defaultValue=""
                        className={twMerge(`w-full border rounded-sm py-3 px-3 outline-none border-gray-400 cursor-pointer appearance-none ${error && "border border-red-500"}`, className)}>
                    <option className={background} value="" disabled>{defaultOpt}</option>
                    {list.map((item, index) => (typeof item == "string" || typeof item == "number") ?
                        <option className={background} key={index} value={item}>{item}</option> :
                        <option className={background} key={index} value={item.value}>{item.text}</option>
                    )}
                </select>
                <ChevronDown
                    className="size-4 text-white absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"/>
            </div>

            {error?.message && <span className="text-[12px] ml-1 text-red-600 mt-1">{error.message as string}</span>}
        </div>
    );
}

export default SelectField;