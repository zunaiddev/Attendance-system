function Tag({text}) {
    return (
        <span
            className="text-xs font-medium px-3 py-1 rounded-md bg-blue-900 text-blue-300">
            {text}
        </span>
    );
}

export default Tag;