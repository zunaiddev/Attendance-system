import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

function Checkbox({text, link, to, register, errors}) {
    return (
        <div className="flex items-start mb-6 pl-1">
            <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value=""
                       className={`w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800 cursor-pointer ${errors && "ring-2 ring-red-800 "}`}
                       {...register}/>
            </div>
            <label htmlFor="remember"
                   className={`ms-2 text-sm font-medium text-gray-300 cursor-pointer select-none `}>{text + " "}
                <Link to={to} className="text-blue-500 hover:underline">{link}</Link>
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    register: PropTypes.object,
    errors: PropTypes.object
}

export default Checkbox;