import PropTypes from "prop-types";

function SomethingWentWrong({message, onRetry = () => location.reload()}) {
    return (
        <div className="flex flex-col items-center justify-center h-full py-10 px-4 text-center">
            <svg
                className="w-16 h-16 text-red-600 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                />
            </svg>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Something went wrong
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6 max-w-md">
                We couldn’t complete your request.{" "}
                {message ?? "Please try again later or refresh the page."}
            </p>

            <button
                onClick={onRetry}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition cursor-pointer"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v6h6M20 20v-6h-6M9 20a9 9 0 1 1 6-16"
                    />
                </svg>

                Try Again
            </button>
        </div>
    );
}

SomethingWentWrong.propTypes = {
    onRetry: PropTypes.func,
}

export default SomethingWentWrong;
