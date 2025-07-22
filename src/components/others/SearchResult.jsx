import Tag from "./Tag.jsx";
import PropTypes from 'prop-types';
import getInitials from "../../utils/getInitials.js";

function SearchResult({isLoading, data}) {

    return (
        <div className="w-full rounded-md border border-blue-300 p-4">
            <div className={`flex space-x-4 ${isLoading && 'animate-pulse'}`}>
                <div className="flex justify-center items-center size-10 rounded-full bg-gray-400">
                    {!isLoading && <span className="text-white font-bold">{getInitials(data.name)}</span>}
                </div>
                <div className="flex-1 space-y-2 py-1">
                    <div className={`${isLoading && "h-2 rounded bg-gray-400"} w-1/3`}>{!isLoading && data.name}</div>
                    {isLoading ? <div className="h-2 rounded bg-gray-400 w-20"></div> : <Tag text={data.role}/>}
                </div>
            </div>
        </div>
    );
}

SearchResult.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string
    })
};

export default SearchResult;