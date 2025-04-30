import {useState} from "react";
import Toast from "./Toast.jsx";
import Check from "../icons/Check.jsx";
import Cross from "../icons/Cross.jsx";
import Info from "../icons/Info.jsx";

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
        success: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={Check}
                                                                 end={duration - 500}/>, duration),
        error: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={Cross}
                                                               end={duration - 500}/>, duration),
        info: (msg, duration = 5000) => addToast(() => <Toast message={msg} icon={Info}
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