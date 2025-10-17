import Card from "../Cards/Card";
import ProfileAvatar from "./ProfileAvatar";
import Badge from "../Badge/Badge";
import {JSX} from "react";
import ProfileButton from "./ProfileButton";
import User from "../../types/User";
import {Calendar, Lock, LockOpen, Mail, Pencil} from "lucide-react";

interface Props {
    user: User
}

function UserInfo({user, onClick}: Props): JSX.Element {

    return (
        <Card>
            <div className="w-full flex gap-9">
                <div className="flex justify-center items-center">
                    <ProfileAvatar text={"JA"}/>
                </div>

                <div className="w-full">
                    <div className="mb-1">
                        <div className="flex w-full justify-between">
                            <h1 className="text-3xl font-oswald">{user.name}</h1>
                            <ProfileButton text="Edit Profile" icon={Pencil}/>
                        </div>
                        <span className="text-gray-300">{user.username}</span>
                    </div>

                    <div className="my-3 flex items-center gap-2">
                        <Badge text={user.role} color={"green"}/>
                        <Badge text={user.locked ? "Locked" : "Active"}
                               color={user.locked ? "red" : "green"}
                               icon={user.locked ? Lock : LockOpen}/>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                        <Mail size={17}/> {user.email}
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={17}/> Joined {user.createdAt.toDateString()}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default UserInfo;