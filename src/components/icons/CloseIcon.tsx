import {IconProp} from "../../types/IconProp";
import {twMerge} from "tailwind-merge";
import {JSX} from "react";

function CloseIcon({className}: IconProp): JSX.Element {
    return (
        <svg className={twMerge("size-6 text-white", className)} xmlns="http://www.w3.org/2000/svg" width="24"
             height="24" fill="none"
             viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
    );
}

export default CloseIcon;