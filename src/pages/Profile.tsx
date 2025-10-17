import {JSX, useState} from "react";
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
        username: "john@1236",
        email: "john@gmail.com",
        locked: false,
        createdAt: new Date(),
        academic: {
            university: "Quantum University",
            course: "Bachelors Of Computer Applications",
            section: "C9",
            semester: 6,
            year: 5
        }
    }
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    return <div className="w-full space-y-5 px-20 relative">
        <UserInfo user={user}/>
        {user.academic && <AcademicInfo academic={user.academic}/>}
        <SecuritySettings/>
        <AccountManagement/>
        {showUpdateForm && <ProfileForm/>}
        {/*<UpdatePasswordForm/>*/}
        {/*<UpdateEmailForm/>*/}
    </div>
}

export default Profile;