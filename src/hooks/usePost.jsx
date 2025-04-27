import {useState} from "react";

const emails = [
    "user1@example.com",
    "student123@gmail.com",
    "john.doe@mail.com",
    "testuser@domain.com"
];

function useApi() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    const post = async (url, postData) => {
        setLoading(true);
        setErrors(null);

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (emails.includes(postData.email)) {
            setLoading(false);
            setErrors({status: 400, message: "Email already exists"});
            return;
        }

        setData(postData);
        setLoading(false);
    };

    return {post, loading, data, errors};
}

export default useApi;
