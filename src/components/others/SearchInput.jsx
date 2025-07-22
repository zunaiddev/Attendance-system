import SearchIcon from "../icons/SearchIcon.jsx";
import {createRef, useState} from "react";
import CloseIcon from "../icons/CloseIcon.jsx";

function SearchInput({onChange}) {
    const [isEmpty, setEmpty] = useState(true);
    const searchRef = createRef();

    function clearSearch() {
        searchRef.current.value = "";
        setEmpty(true);
    }

    function handleOnChange(e) {
        let value = e.target.value;

        if (value.length === 0) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }

        onChange(value.toLowerCase().trim());
    }

    return (
        <div className="relative w-full">
            <div
                className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon className="size-4 text-white"/>
            </div>
            <input type="text"
                   className="outline-none p-2 ps-10 text-sm border rounded-lg w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Search for items" onChange={handleOnChange} ref={searchRef}/>
            {!isEmpty &&
                <div className="absolute inset-y-0 right-2 flex items-center ps-3 cursor-pointer"
                     onClick={clearSearch}>
                    <CloseIcon className="text-white size-4"/>
                </div>
            }
        </div>
    );
}

export default SearchInput;