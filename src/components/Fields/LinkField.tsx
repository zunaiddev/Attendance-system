import {Link} from "react-router-dom";
import {twMerge} from "tailwind-merge";

interface Props {
    to: string;
    linkText: string;
    label?: string;
    className?: string;
}

function LinkField({to, label, linkText, className}: Props) {
    return (
        <p className={twMerge("text-center text-xs text-gray-400 mt-2", className)}>
            {label && `${label}? `}
            <Link
                to={to}
                className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
            >
                {linkText}
            </Link>
        </p>
    );
}

export default LinkField;