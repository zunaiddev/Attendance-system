import {useState} from "react";
import ToastComponent from "./ToastComponent.jsx";
import CheckIcon from "../icons/CheckIcon.jsx";
import InfoIcon from "../icons/InfoIcon.jsx";
import ErrorIcon from "../others/ErrorIcon.jsx";

let Toast = {};

function Toaster() {
    const [toast, setToast] = useState({});

    function addToast(callback, duration) {
        function dismiss() {
            setToast(null);
        }

        setToast({content: callback({dismiss}), dismiss});

        if (duration === -1) return;
        setTimeout(dismiss, duration);
    }

    Toast = {
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
            {toast && toast.content}
        </div>
    );
}

export {Toast, Toaster};