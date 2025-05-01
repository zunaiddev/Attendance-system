import PropTypes from 'prop-types';
import {useState} from "react";
import EyeOnIcon from "./icons/EyeOnIcon.jsx";
import EyeOffIcon from "./icons/EyeOffIcon.jsx";

function InputField({
                        label = null,
                        placeholder = "",
                        autoComplete = "",
                        type = "text",
                        register = () => {
                        },
                        errors = null,
                        autoFocus = false
                    }) {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show);
    }

    return (
        <div className="w-full flex flex-col">
            {label && <label className="block mb-2 text-sm font-medium text-white">{label}</label>}
            <div className="relative">
                <input
                    className={`shadow-xs border border-gray-700 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5 bg-gray-700 
                     placeholder-gray-400 text-white
                      ${errors && "border-red-600"}`}
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

            {errors && <span className="text-[12px] ml-1 text-red-600 mt-1">{errors.message}</span>}
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
    register: PropTypes.object,
    errors: PropTypes.object,
    autoFocus: PropTypes.bool,
}

export default InputField;