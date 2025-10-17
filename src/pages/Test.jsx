import {useEffect} from "react";
import ProfileAvatar from "../components/Profile/ProfileAvatar.js";

function Test() {
    useEffect(() => {

    }, []);

    return (
        <div className="flex h-screen w-full justify-center items-center">
            <ProfileAvatar/>
        </div>
    );
}

export default Test;