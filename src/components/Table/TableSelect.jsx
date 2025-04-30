import PropTypes from "prop-types";

function TableSelect({list, onChange, defaultValue = ""}) {
    return (
        <div>
            <select
                className="bg-gray-700 border-gray-600 rounded-md text-white cursor-pointer px-4 py-1 outline-none appearance-none"
                onChange={onChange}
                defaultValue={defaultValue}>
                {list.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
            </select>
        </div>
    );
}

TableSelect.prototype = {
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
}

export default TableSelect;