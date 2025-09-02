import {IconProp} from "../../types/IconProp";
import {JSX} from "react";
import {twMerge} from "tailwind-merge";

function CheckIcon({className}: IconProp): JSX.Element {
    return (
        <svg className={twMerge(" size-6 text-white", className)} xmlns="http://www.w3.org/2000/svg" width="24"
             height="24"
             fill="currentColor"
             viewBox="0 0 24 24">
            <path fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clipRule="evenodd"/>
        </svg>
    );
}

export default CheckIcon;