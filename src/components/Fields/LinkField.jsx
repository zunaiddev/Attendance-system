import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function LinkField({to, label, linkText}) {
    return (
        <p className="text-center text-xs text-gray-400 mt-2">
            {label}?{" "}
            <Link
                to={to}
                className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
            >
                {linkText}
            </Link>
        </p>
    );
}

LinkField.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LinkField;