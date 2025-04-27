import PropTypes from "prop-types";
import {createElement} from "react";

function SocialButton({text, icon}) {
    return (
        <button
            className="flex items-center gap-3 border border-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-500 cursor-pointer">
            {icon && createElement(icon, {className: "size-5"})}
            <p className="text-sm text-white">{text}</p>
        </button>
    );
}

SocialButton.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired
}

export default SocialButton;