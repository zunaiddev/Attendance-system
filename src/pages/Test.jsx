import {useEffect} from "react";
import capitaliseEachChar from "../utils/capitaliseEachChar.js";

function Test() {


    useEffect(() => {
        console.log(capitaliseEachChar("ZUnAiD jghwsdu"))
    }, []);

    return (
        <h1>Test</h1>
    );
}

export default Test;