import Card from "../Cards/Card";
import {JSX, useState} from "react";
import ProfileButton from "./ProfileButton";
import {Key, LucideIcon, Mail} from 'lucide-react';
import PasswordUpdateForm from "../Forms/PasswordUpdateForm";
import EmailUpdateForm from "../Forms/EmailUpdateForm";

interface FieldProps {
    icon: LucideIcon,
    title: string,
    desc: string,
    text: string,
    onEdit: () => void,
}

function SecuritySettings() {
    const [passForm, setPassForm] = useState(false);
    const [emailForm, setEmailForm] = useState(false);

    const showPassForm = () => setPassForm(true);
    const hidePassForm = () => setPassForm(false);

    const showEmailForm = () => setEmailForm(true);
    const hideEmailForm = () => setEmailForm(false);

    return (<>
        <Card title="Security Settings" desc="Manage your password and email">
            <div className="space-y-6">
                <SecurityField icon={Key} text="Chnage password" desc="Chnage Your Password" title="Password"
                               onEdit={showPassForm}/>
                <SecurityField icon={Mail} text="Chnage Email" desc="Chnage Your Password" title="Password"
                               onEdit={showEmailForm}/>
            </div>
        </Card>
            {passForm && <PasswordUpdateForm hideForm={hidePassForm}/>}
            {emailForm && <EmailUpdateForm hideForm={hideEmailForm}/>}
        </>
    );
}

function SecurityField({icon: Icon, title, desc, text, onEdit}: FieldProps): JSX.Element {
    return <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <Icon size={18}/>
                <h3 className="text-white">{title}</h3>
            </div>
            <p className="text-sm text-gray-500">{desc}</p></div>
        <ProfileButton text={text} onClick={onEdit}/>
    </div>
}

export default SecuritySettings;