import Switch from "./Switch.jsx";
import Button from "./Button.jsx";

function Header({onStudentAddClick, isUpdate, onUpdate}) {

    return (
        <div className="w-full pb-2 flex items-center gap-10">
            <div>
                <Switch label="Auto save"/>
            </div>
            <button className="text-white text-sm cursor-pointer" onClick={onStudentAddClick}> + Add Students</button>
            <Button text={isUpdate ? "Cancel" : "Manage"} onClick={onUpdate}
                    className="sm:!w-fit sm:ml-2 !py-2 bg-gray-700 border-gray-600 hover:bg-gray-600"/>
        </div>
    );
}

export default Header;