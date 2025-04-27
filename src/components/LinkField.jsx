import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function LinkField({to, text}) {
    return (
        <div className="w-full flex justify-center">
            <Link to={to} className="text-blue-700 hover:text-blue-800 cursor-pointer w-fit">
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