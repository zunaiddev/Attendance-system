import {RxCross1} from "react-icons/rx";
import Notify from "./icons/Notify.jsx";

function Notification({heading, message, onClick, dismiss}) {
    return (
        <div
            className="w-full max-w-xs p-4 rounded-lg shadow-sm bg-gray-800 text-gray-400 animate-slide transition-all duration-500 ease-in-out"
            role="alert">
            <div className="flex">
                <div
                    className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg text-blue-300 bg-blue-900">
                    <Notify/>
                </div>
                <div className="ms-3 text-sm font-normal">
                    {heading && <span className="mb-1 text-sm font-semibold text-white">{heading}</span>}
                    <div className="mb-2 text-sm font-normal">{message}</div>
                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={onClick}
                                className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-600 focus:ring-blue-800">
                            Update
                        </button>
                        <button onClick={dismiss}
                                className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center border rounded-lg focus:ring-4 focus:outline-none bg-gray-600 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-700">
                            Not now
                        </button>
                    </div>
                </div>
                <button type="button" onClick={dismiss}
                        className="ms-auto -mx-1.5 -my-1.5 items-center justify-center shrink-0 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700">
                    <RxCross1 className="size-4"/>
                </button>
            </div>
        </div>
    );
}

export default Notification;