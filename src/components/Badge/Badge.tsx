import {LucideIcon} from "lucide-react";

interface Props {
    text: string;
    color?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
    icon?: LucideIcon;
}

const colorMap: Record<string, string> = {
    gray: "bg-gray-400/10 text-gray-400 inset-ring inset-ring-gray-400/20",
    red: "bg-red-400/10 text-red-400 inset-ring inset-ring-red-400/20",
    yellow: "bg-yellow-400/10 text-yellow-500 inset-ring inset-ring-yellow-400/20",
    green: "bg-green-400/10 text-green-400 inset-ring inset-ring-green-500/20",
    blue: "bg-blue-400/10 text-blue-400 inset-ring inset-ring-blue-400/30",
    indigo: "bg-indigo-400/10 text-indigo-400 inset-ring inset-ring-indigo-400/30",
    purple: "bg-purple-400/10 text-purple-400 inset-ring inset-ring-purple-400/30",
    pink: "bg-pink-400/10 text-pink-400 inset-ring inset-ring-pink-400/20",
};

function Badge({text, color = "gray", icon: Icon}: Props) {
    return (
        <div
            className={`inline-flex items-center rounded-md min-h-6 px-2 font-medium ${colorMap[color]}`}
        >
            {Icon && <Icon size={14} className="mr-2"/>}
            <span className="text-xs first-letter:uppercase lowercase"> {text}</span>
        </div>
    );
}

export default Badge;