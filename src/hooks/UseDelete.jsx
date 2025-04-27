import {useState} from "react";

function UseDelete() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);


    return {isLoading: loading, data, errors}
}

export default UseDelete;