import PropTypes from "prop-types";

function LinkField({to, text}) {
    return (
        <div className="w-full flex justify-center">
            <span className="text-blue-700 hover:text-blue-800 cursor-pointer w-fit">
              {text}
            </span>
        </div>
    );
}

LinkField.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LinkField;