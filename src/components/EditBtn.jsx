import {FaUserEdit} from "react-icons/fa";

function EditBtn({text = "Edit", onClick, loading = false}) {
    return (
        <button onClick={onClick}
                className="flex items-center gap-1 bg-blue-600 outline-none border-none px-3 py-1 rounded-lg hover:bg-blue-500 cursor-pointer">
            <FaUserEdit className="size-4"/> {text}
        </button>
    );
}

EditBtn.propTypes = {
    text: String
}

export default EditBtn;