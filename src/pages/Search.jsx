import SearchInput from "../components/others/SearchInput.jsx";
import SearchResult from "../components/others/SearchResult.jsx";

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