import {useState} from "react";
import Toast from "./Toast.jsx";
import CheckIcon from "../icons/CheckIcon.jsx";
import InfoIcon from "../icons/InfoIcon.jsx";
import ErrorIcon from "../others/ErrorIcon.jsx";

let showToast = {};

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

    showToast = {
        success: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={CheckIcon} fill={"text-green-600"}
                                                                 end={duration - 500}/>, duration),
        error: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={ErrorIcon} fill={"text-red-600"}
                                                               end={duration - 500}/>, duration),
        info: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={InfoIcon} fill={"text-blue-600"}
                                                              end={duration - 500}/>, duration),
        custom: (callback, duration = -1) => addToast(callback, duration),
    }

    return (
        <div className="fixed w-full top-0 left-0 z-50 flex justify-center pt-4 ">
            {toast && toast.content}
        </div>
    );
}

export {showToast, Toaster};