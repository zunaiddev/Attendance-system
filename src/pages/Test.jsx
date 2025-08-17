import {useEffect} from "react";
import {Toast} from "../components/Toaster/Toaster.jsx";

function Test() {

    useEffect(() => {
        Toast.success("success");
    }, []);

    return (
        <center>
            Hii This one is a testing page
        </center>
    );
}

export default Test;