import PropTypes from "prop-types";

function SocialButton({text, icon: Icon}) {
    return (
        <button
            className="flex items-center gap-3 border border-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-500 cursor-pointer">
            <Icon/>
            <p className="text-sm text-white">{text}</p>
        </button>
    );
}

SocialButton.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired
}

export default SocialButton;