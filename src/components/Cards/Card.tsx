import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    title?: string,
    desc?: string,
    children: ReactNode,
    className?: string,
    button?: ReactNode,
}

function Card({title, desc, children, button, className}: Props) {
    return (
        <div className={twMerge("w-full bg-gray-800 flex flex-col rounded-2xl p-6", className)}>
            <div className="w-full mb-5 flex justify-between">
                {(title || desc) && <div>
                    {title && <h1 className="text-white">{title}</h1>}
                    {desc && <span className="text-gray-400">{desc}</span>}
                </div>}

                {button && button}
            </div>
            {children}
        </div>
    );
}

export default Card;