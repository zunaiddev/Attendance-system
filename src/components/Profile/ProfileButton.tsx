import {LucideIcon} from "lucide-react";
import {twMerge} from "tailwind-merge";

interface Props {
    text: string,
    icon?: LucideIcon,
    className?: string,
}

function ProfileButton({text, icon: Icon, className, onClick}: Props) {
    return (
        <button onClick={onClick}
                className={twMerge("bg-white hover:text-gray-200 hover:bg-gray-700 text-gray-800 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none border  h-8 rounded-md gap-1.5 px-3", className)}
                type="button">
            {Icon && <Icon size={15}/>}
            {text}
        </button>
    );
}

export default ProfileButton;