import SearchInput from "../components/SearchInput.jsx";
import SearchResult from "../components/SearchResult.jsx";

function Search() {
    let data = {
        name: "Zunaid",
        role: "Student"
    }

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="w-full">
                <SearchInput/>
            </div>
            <div className="space-y-2">
                <SearchResult data={data}/>
                <SearchResult isLoading={true} data={data}/>
                <SearchResult isLoading={true} data={data}/>
                <SearchResult isLoading={true} data={data}/>
                <SearchResult isLoading={true} data={data}/>
                <SearchResult isLoading={true} data={data}/>
                <SearchResult isLoading={true} data={data}/>
            </div>
        </div>
    );
}

export default Search;