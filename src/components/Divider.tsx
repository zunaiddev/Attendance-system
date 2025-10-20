function Divider() {
    return (
        <div className="relative my-4">
            <hr/>
            <span
                className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-5">
                    or
                </span>
        </div>
    );
}

export default Divider;