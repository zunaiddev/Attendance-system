import PropTypes from "prop-types";
import ArrowDownIcon from "../icons/ArrowDownIcon.jsx";

function SelectField({list, label, register, error, defaultOpt = "Select...", className}) {
    return (
        <div className="w-full flex flex-col">
            {label && <label className="text-white font-sans font-semibold">{label}</label>}
            <div className="relative">
                <select {...register} defaultValue=""
                        className={`w-full border rounded-sm py-3 px-3 outline-none border-gray-400 cursor-pointer appearance-none ${error && "border border-red-500"} ${className}`}>
                    <option value="" disabled>{defaultOpt}</option>
                    {list.map((item, index) => (typeof item == "string" || typeof item == "number") ?
                        <option key={index} value={item}>{item}</option> :
                        <option key={index} value={item.value}>{item.text}</option>
                    )}
                </select>
                <ArrowDownIcon
                    className="size-6 text-white absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"/>
            </div>

            {error && <span className="text-[12px] ml-1 text-red-600 mt-1">{error.message}</span>}
        </div>
    );
}

SelectField.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number,
            PropTypes.shape({
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                text: PropTypes.string.isRequired,
            })])
    ).isRequired,
    label: PropTypes.string,
    register: PropTypes.object,
    error: PropTypes.object,
    defaultOpt: PropTypes.string
}

export default SelectField;