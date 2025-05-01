import SearchIcon from "./icons/SearchIcon.jsx";
import CloseIcon from "./icons/CloseIcon.jsx";
import {useState} from "react";

function SearchInput({onChange}) {
    const [isClear, setIsClear] = useState(false);

    function clearSearch() {
        setIsClear(true);
    }

    function handleOnChange(e) {
        onChange(e.target.value.toLowerCase().trim());
    }

    return (
        <div className="relative w-full">
            <div
                className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon className="size-4 text-white"/>
            </div>
            <input type="text"
                   className="block outline-none p-2 ps-10 text-sm border rounded-lg w-full md:w-80 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Search for items" onChange={handleOnChange}/>
            {isClear &&
                <div className="absolute inset-y-0 right-2 flex items-center ps-3 cursor-pointer"
                     onClick={clearSearch}>
                    <CloseIcon/>
                </div>
            }
        </div>
    );
}

export default SearchInput;