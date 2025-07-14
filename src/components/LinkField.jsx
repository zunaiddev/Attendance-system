import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function LinkField({to, text, underline = false}) {
    return (
        <div className="w-full flex justify-center">
            <Link to={to}
                  className={`text-blue-600 hover:text-blue-500 cursor-pointer w-fit ${underline && "underline"}`}>
              {text}
            </Link>
        </div>
    );
}

LinkField.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LinkField;