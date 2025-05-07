function CloseSidebarIcon({className = "size-6 text-white"}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
             viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8.99994 10 7 11.9999l1.99994 2M12 5v14M5 4h14c.5523 0 1 .44772 1 1v14c0 .5523-.4477 1-1 1H5c-.55228 0-1-.4477-1-1V5c0-.55228.44772-1 1-1Z"/>
        </svg>
    );
}

export default CloseSidebarIcon;