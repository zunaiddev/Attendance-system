import Switch from "./Switch.jsx";

function Header({onStudentAddClick}) {
    return (
        <div className="w-full py-2 flex items-center gap-10">
            <div>
                <Switch label="Auto save"/>
            </div>
            <button className="text-white text-sm cursor-pointer" onClick={onStudentAddClick}> + Add Students</button>
        </div>
    );
}

export default Header;