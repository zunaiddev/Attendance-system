import PropTypes from "prop-types";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

function SocialButton({icon, text}) {
    icon = icon.toLowerCase();
    return (
        <button
            className="flex items-center gap-3 border border-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-500 cursor-pointer">
            {icon === "google" ?
                <FcGoogle/> :
                <FaGithub/>
            } <p className="text-sm text-white">{text}</p>
        </button>
    );
}

SocialButton.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default SocialButton;