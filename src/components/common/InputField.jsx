import PropTypes from 'prop-types';
import {LuEye, LuEyeOff} from "react-icons/lu";
import {useState} from "react";

function InputField({label = null, placeholder = "", autoComplete = "", type = "text", register, errors}) {
    const [show, setShow] = useState(false);

    function handleShow(){
        setShow(!show);
    }

    return (
        <div className="w-full flex flex-col">
            {label && <label className="text-white font-sans font-semibold">{label}</label>}
            <div className="relative">
                <input className="border w-full rounded-sm py-3 px-3 outline-none border-gray-400
            focus:border-blue-800 placeholder:text-gray-400 font-sans"
                       placeholder={placeholder} autoComplete={autoComplete} type={type === "password" ? (show ? "text" : "password") : type}
                {...register}/>
                {type === "password" && (show ?
                    <LuEyeOff className="absolute top-[50%] bottom-[50%] translate-y-[-50%] right-2 text-gray-400 size-5 cursor-pointer"
                           onClick={handleShow}/> :
                    <LuEye className="absolute top-[50%] bottom-[50%] translate-y-[-50%] right-2 text-gray-400 size-5 cursor-pointer"
                        onClick={handleShow}/>)}

            </div>

            {errors && <span className="text-sm text-red-600 mt-1">This field is required</span>}
        </div>
    );
}

InputField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    type: PropTypes.string
}

export default InputField;