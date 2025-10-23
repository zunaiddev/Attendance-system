import {JSX, ReactNode, useState} from "react";
import ToastComponent2 from "./ToastComponent2";
import {Check, Info, ShieldX, TriangleAlert} from "lucide-react";

let toast2;
function Toaster2() {
    const [toasts, setToasts] = useState<Array<JSX.Element>>([]);

    function remove() {
        setToasts(prev => {
            const newToasts = [...prev];
            newToasts.pop();
            return newToasts;
        });
    }

    function addToast(icon: ReactNode, message: string) {
        setToasts(prev => {
            let newToast = [...prev];
            newToast.push(<ToastComponent2 key={newToast.length} icon={icon} message={message} onClick={remove}/>);
            return newToast;
        });
    }

    toast2 = {
        success: (message: string) => addToast(<Check className="size-5 text-green-500"/>, message),
        error: (message: string) => addToast(<ShieldX className="size-5 text-red-500"/>, message),
        warning: (message: string) => addToast(<TriangleAlert className="size-5 text-orange-500"/>, message),
        info: (message: string) => addToast(<Info className="size-5 text-blue-500"/>, message),
    }

    return (toasts.length > 0 &&
        <div>
            {/*{toasts[toasts.length - 1]}*/}
            {toasts}
        </div>
    );
}

export {toast2, Toaster2};