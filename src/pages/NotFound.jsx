import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {showToast} from "../components/Toaster/Toaster.jsx";

function NotFound() {
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        showToast.success("This is a temp", 2000);
    }, [])

    return (
        <div
            className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <h1 className="text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">404</h1>
            <p className="text-3xl font-semibold mb-2">Page Not Found</p>
            <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <button onClick={handleBack}
                    className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                Go back
            </button>
        </div>
    );
}

export default NotFound;
