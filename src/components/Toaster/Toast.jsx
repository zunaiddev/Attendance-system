import React, {createElement, useEffect, useState} from "react";

function Toast({message, icon, fill, end}) {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setTimeout(() => setAnimate(true), end - 500);
    }, [end]);

    return (
        <div
            className={`flex items-center max-w-xs p-4 mb-4 rounded-lg shadow-sm text-white bg-gray-800 ${animate ? 'animate-slide-end' : 'animate-slide'}`}
            role="alert">
            {icon && createElement(icon, {className: `size-6 ${fill}`})}
            <span className="ms-3 text-md font-normal">{message}</span>
        </div>
    );
}

export default Toast;