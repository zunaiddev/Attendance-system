import {JSX} from "react";
import UserInfo from "../components/Profile/UserInfo";
import AcademicInfo from "../components/Profile/AcademicInfo";
import SecuritySettings from "../components/Profile/SecuritySettings";
import AccountManagement from "../components/Profile/AccountManagement";
import User from "../types/User";
import Role from "../types/Role";

function Profile(): JSX.Element {
    const user: User = {
        id: 1,
        role: Role.STUDENT,
        name: "John Doe",
        username: "john_doe",
        email: "john@gmail.com",
        locked: false,
        createdAt: new Date(),
        academic: {
            university: "Quantum University",
            course: "BCA",
            section: "C9",
            semester: 5,
            year: 3
        }
    }
    // const {data: user, isPending, isError} = useQuery({
    //     queryKey: ["user"],
    //     queryFn: getUser,
    // });

    return <div className="w-full space-y-5 px-5 pt-13 pb-20 relative">
        <UserInfo user={user}/>
        {user?.academic && <AcademicInfo academic={user.academic}/>}
        <SecuritySettings/>
        <AccountManagement/>
    </div>
}

export default Profile;