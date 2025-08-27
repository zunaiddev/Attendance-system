import PropTypes from 'prop-types';
import {useState} from "react";
import EyeOnIcon from "../icons/EyeOnIcon.jsx";
import EyeOffIcon from "../icons/EyeOffIcon.jsx";

function InputField({
                        label = null,
                        placeholder = "",
                        autoComplete = null,
                        type = "text",
                        register,
                        error = null,
                        autoFocus = false
                    }) {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show);
    }

    return (
        <div className="w-full flex flex-col">
            {label && <label className="block mb-2 text-sm font-medium text-gray-300">{label}</label>}
            <div className="relative">
                <input
                    className={`shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 outline-none block w-full p-2.5 bg-gray-700 
                     placeholder-gray-400 text-white
                      ${error && "border-red-600"} ${type === "password" && "pr-9"}`}
                    autoFocus={autoFocus}
                    placeholder={placeholder} autoComplete={autoComplete}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    {...register}/>
                {type === "password" && (show ?
                        <div
                            className="absolute top-[50%] bottom-[50%] translate-y-[-50%] right-2 text-gray-400 size-5 cursor-pointer"
                            onClick={handleShow}>
                            <EyeOnIcon/>
                        </div> :
                        <div
                            className="absolute top-[50%] bottom-[50%] translate-y-[-50%] right-2 text-gray-400 size-5 cursor-pointer"
                            onClick={handleShow}>
                            <EyeOffIcon/>
                        </div>
                )}

            </div>

            {error && <span className="text-[12px] ml-1 text-red-600 mt-1">{error.message}</span>}
        </div>
    );
}

InputField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    register: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    autoFocus: PropTypes.bool,
}

export default InputField;