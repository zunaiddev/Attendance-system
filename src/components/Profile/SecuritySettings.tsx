import Card from "../Cards/Card";
import {JSX} from "react";
import ProfileButton from "./ProfileButton";
import {Key, LucideIcon, Mail} from 'lucide-react';

interface FieldProps {
    icon: LucideIcon,
    title: string,
    desc: string,
    text: string
}

function SecuritySettings() {
    return (
        <Card title="Security Settings" desc="Manage your password and email">
            <div className="space-y-6">
                <SecurityField icon={Key} text="Chnage password" desc="Chnage Your Password" title="Password"/>
                <SecurityField icon={Mail} text="Chnage Email" desc="Chnage Your Password" title="Password"/>
            </div>
        </Card>
    );
}

function SecurityField({icon: Icon, title, desc, text}: FieldProps): JSX.Element {
    return <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <Icon size={18}/>
                <h3 className="text-white">{title}</h3>
            </div>
            <p className="text-sm text-gray-500">{desc}</p></div>
        <ProfileButton text={text}/>
    </div>
}

export default SecuritySettings;