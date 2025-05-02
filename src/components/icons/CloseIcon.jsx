function CloseIcon({className = "size-6 text-white"}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M7.99994 10 6 11.9999l1.99994 2M11 5v14m-7 0h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"/>
        </svg>
    );
}

export default CloseIcon;