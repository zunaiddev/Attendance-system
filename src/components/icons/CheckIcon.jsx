function CheckIcon({className = "size-6 text-white"}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none"
             viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
    );
}

export default CheckIcon;