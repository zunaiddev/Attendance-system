import {useEffect} from "react";
import {toast2} from "../components/Toaster2/Toaster2.js";

function Test() {
    useEffect(() => {
        toast2.success("Initial Toast.");
    }, []);

    return (
        <div className="flex h-screen w-full justify-center items-center gap-6">
            <button className="bg-blue-950 px-5 py-3 rounded" onClick={() =>
                toast2.success("This One is a Success Toast")}>Success
            </button>
            <button className="bg-blue-950 px-5 py-3 rounded" onClick={() =>
                toast2.error("This One is a Error Toast")}>Error
            </button>
            <button className="bg-blue-950 px-5 py-3 rounded" onClick={() =>
                toast2.warning("This One is a Warning Toast")}>Warning
            </button>
            <button className="bg-blue-950 px-5 py-3 rounded" onClick={() =>
                toast2.info("This One is a Info Toast")}>Info
            </button>
        </div>
    );
}

export default Test;