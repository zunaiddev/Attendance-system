import {useEffect, useState} from "react";

function Toast({message, icon: Icon, end}) {
    const [animate, setAnimate] = useState(false);

    console.log(end);
    useEffect(() => {
        setTimeout(() => setAnimate(true), end);
    }, [end])

    return (
        <div
            className={`flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow-sm text-gray-400 bg-gray-800 animate-slide ${animate && 'animate-slide-end'}`}
            role="alert">
            <Icon className="size-6"/>
            <span className="ms-3 text-sm font-normal">{message}</span>
        </div>
    );
}

export default Toast;