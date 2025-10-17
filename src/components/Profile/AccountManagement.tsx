import Card from "../Cards/Card";
import {ShieldAlert, Trash2, UserX} from "lucide-react";
import {ReactNode} from "react";
import Button from "../Buttons/Button";
import {twMerge} from "tailwind-merge";

interface FieldProps {
    title: string,
    desc: string,
    icon: ReactNode,
    children: ReactNode,
    className?: string,
}

function AccountManagement() {
    return (
        <Card title="Academic Information" desc="Educational details and current enrollment">
            <Field title="Deactive Account" desc="Temporarily disable your account. You can reactivate it anytime by
            logging in." className="mb-3" icon={<UserX size={20} className="text-orange-400"/>}>
                <Button text="Deactivate Account" icon={UserX}
                        className="text-orange-400 bg-orange-500/20 px-4 py-2 hover:bg-orange-500/30 disabled:bg-orange-900"/>
            </Field>

            <Field title="Delete Account" className="border-red-500/30 bg-red-500/5"
                   desc="Permanently delete your account and all associated data. This action cannot be undone."
                   icon={<ShieldAlert size={20} className="text-red-400"/>}>
                <Button text="Deactivate Account" icon={Trash2}
                        className="text-sm text-red-400 bg-red-500/20 px-4 py-2 hover:bg-red-500/30 disabled:bg-red-900"/>
            </Field>
        </Card>
    );
}

function Field({title, desc, icon, children, className}: FieldProps) {
    return <div className={twMerge("p-4 border border-gray-700 rounded-lg space-y-3", className)}>
        <div className="flex items-start gap-3">
            {icon}
            <div className="flex-1 space-y-1">
                <h3 className="text-white">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
        {children}
    </div>
}

export default AccountManagement;