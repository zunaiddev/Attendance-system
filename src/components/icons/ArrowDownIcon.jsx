import PropTypes from "prop-types";

function ArrowDownIcon({className = "size-6 text-white"}) {
    return (
        <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             width="24" height="24"
             fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
        </svg>
    );
}

ArrowDownIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}

export default ArrowDownIcon;