import {JSX, useState} from "react";

function Toaster2() {
    const [toasts, setToasts] = useState<Array<JSX.Element>>([]);

    function remove() {
        setToasts(prev => {
            const newToasts = [...prev];
            newToasts.pop();
            return newToasts;
        });
    }


    return (toasts.length > 0 &&
        <div className="fixed bottom-6 left-5 max-h-40 max-w-sm 30 z-999">
            {toasts[toasts.length - 1]}
        </div>
    );
}

export default Toaster2;