function Switch({label = "Toggle me"}) {
    return (
        <label className="inline-flex items-center cursor-pointer gap-4 ">
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
            <input type="checkbox" value="" className="sr-only peer"/>
            <div
                className="relative w-9 h-5 peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
        </label>

    );
}

export default Switch;