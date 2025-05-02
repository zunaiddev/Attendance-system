function MenuIcon({className = "size-6 text-white"}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
             viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
        </svg>
    );
}

export default MenuIcon;