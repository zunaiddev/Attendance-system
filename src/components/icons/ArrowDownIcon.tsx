import {twMerge} from "tailwind-merge";
import {IconProp} from "../../types/IconProp";

function ArrowDownIcon({className}: IconProp) {
    return (
        <svg className={twMerge("size-6 text-white", className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             width="24" height="24"
             fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
        </svg>
    );
}

export default ArrowDownIcon;