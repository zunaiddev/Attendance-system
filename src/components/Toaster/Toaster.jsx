import {useState} from "react";
import Toast from "./Toast.jsx";
import CheckIcon from "../icons/CheckIcon.jsx";
import CrossIcon from "../icons/CrossIcon.jsx";
import InfoIcon from "../icons/InfoIcon.jsx";

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
        success: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={CheckIcon}
                                                                 end={duration - 500}/>, duration),
        error: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={CrossIcon}
                                                               end={duration - 500}/>, duration),
        info: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={InfoIcon}
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