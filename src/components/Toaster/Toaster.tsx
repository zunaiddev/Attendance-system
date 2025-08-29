import {JSX, useState} from "react";
import ToastComponent from "./ToastComponent.jsx";
import CheckIcon from "../icons/CheckIcon.jsx";
import InfoIcon from "../icons/InfoIcon.jsx";
import ErrorIcon from "../others/ErrorIcon.jsx";

type ToastData = {
    content: JSX.Element;
    dismiss: () => void;
} | null;

let toast: ToastType;

function Toaster() {
    const [toastData, setToast] = useState<ToastData>(null);

    function addToast(callback: any, duration: number) {
        function dismiss() {
            setToast(null);
        }

        setToast({content: callback({dismiss}), dismiss});

        if (duration === -1) return;
        setTimeout(dismiss, duration);
    }

    toast = {
        success: (msg, duration = 5000) => addToast(() => <ToastComponent message={msg} icon={CheckIcon}
                                                                          fill={"text-green-600"}
                                                                          end={duration}/>, duration),
        error: (msg, duration = 5000) => addToast(() => <ToastComponent message={msg} icon={ErrorIcon}
                                                                        fill={"text-red-600"}
                                                                        end={duration}/>, duration),
        info: (msg, duration = 5000) => addToast(() => <ToastComponent message={msg} icon={InfoIcon}
                                                                       fill={"text-blue-600"}
                                                                       end={duration}/>, duration),
        custom: (callback, duration = -1) => addToast(callback, duration),
    }

    return (
        <div className="z-50 fixed top-2 left-1/2 transform -translate-x-1/2 size-fit">
            {toastData && toastData.content}
        </div>
    );
}

export {toast, Toaster};