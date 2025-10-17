import {MouseEventHandler, Ref} from "react";
import ButtonLoader from "../Loaders/ButtonLoader";
import {twMerge} from "tailwind-merge";
import {LucideIcon} from "lucide-react";

type ButtonProp = {
    text: string;
    type?: "submit" | "reset" | "button";
    icon?: LucideIcon;
    isSubmitting?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disable?: boolean;
    ref?: Ref<HTMLButtonElement>;
    className?: string;
}

function Button({
                    text,
                    type = "submit",
                    icon: Icon,
                    isSubmitting,
                    onClick,
                    disable = false,
                    ref = null,
                    className
                }: ButtonProp) {
    return (
        <button type={type}
                className={twMerge("flex justify-center items-center gap-2 w-fit text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 bg-blue-600 hover:bg-blue-700 cursor-pointer min-h-4 disabled:cursor-not-allowed disabled:text-gray-50 disabled:bg-blue-900", className)}
            onClick={onClick}
            disabled={disable || isSubmitting}
            ref={ref}>
            {isSubmitting ? <ButtonLoader/> : <>{Icon && <Icon size={16}/>} <span>{text}</span></>}
        </button>
    );
}

export default Button;