import {JSX, ReactNode, useState} from "react";
import {X} from "lucide-react";

interface Props {
    icon: ReactNode;
    message: string;
    onClick: () => void
}

function ToastComponent2({icon, message, onClick}: Props): JSX.Element {
    const [animation, setAnimation] = useState<string>("animate-toast-in");

    function handleClose() {
        setAnimation("animate-toast-out");

        setTimeout(onClick, 500);
    }

    return (<div
            className={`fixed bottom-6 left-6 flex items-center gap-3 bg-white shadow-lg 
                border border-gray-200 rounded-xl px-4  py-3 w-72 ${animation}`}>
            <div className="flex-shrink-0">
                {icon}
            </div>

            <div className="flex-1">
                <p className="text-xs text-gray-600">
                    {message}
                </p>
            </div>

            <button onClick={handleClose}>
                <X className="size-4 text-gray-400 hover:text-gray-600"/>
            </button>
        </div>
    );
}

export default ToastComponent2;