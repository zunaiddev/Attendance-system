import {X} from "lucide-react";
import {JSX, ReactNode} from "react";

interface Props {
    icon: ReactNode;
    message: string;
    onClick: () => void
}

function ToastComponent2({icon, message, onClick}: Props): JSX.Element {
    return (
        <div className="flex gap-2 p-2 bg-white text-black rounded-md min-h-14 relative pr-6">
            {icon}
            <div>
                <span>{message}</span>
            </div>

            <button className="absolute right-0 top-1 cursor-pointer" onClick={onClick}>
                <X size={17}/>
            </button>
        </div>
    );
}

export default ToastComponent2;