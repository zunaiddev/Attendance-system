import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    title?: string,
    desc?: string,
    children: ReactNode,
    className?: string,
}

function Card({title, desc, children, className}: Props) {
    return (
        <div className={twMerge("w-full bg-gray-800 flex flex-col rounded-2xl p-6", className)}>
            <div className="w-full mb-5">
                {title && <h1 className="text-white">{title}</h1>}
                {desc && <span className="text-gray-400">{desc}</span>}
            </div>
            {children}
        </div>
    );
}

export default Card;