import PropTypes from "prop-types";
import ArrowDownIcon from "./icons/ArrowDownIcon.jsx";

function SelectField({list, label, register, errors}) {
    return (
        <div className="w-full flex flex-col">
            {label && <label className="text-white font-sans font-semibold">{label}</label>}
            <div className="relative">
                <select {...register}
                        className="w-full border rounded-sm py-3 px-3 outline-none border-gray-400 cursor-pointer appearance-none">
                    <option value="" disabled selected>Please Select A Year</option>
                    {list.map((item, index) => <option key={index} value={item}
                                                       className="bg-transparent">{item}</option>)}
                </select>
                <ArrowDownIcon/>
            </div>

            {errors && <span className="text-[12px] ml-1 text-red-600 mt-1">{errors.message}</span>}
        </div>
    );
}

SelectField.propTypes = {
    list: PropTypes.array.isRequired,
    label: PropTypes.string,
    register: PropTypes.object,
    errors: PropTypes.object
}

export default SelectField;