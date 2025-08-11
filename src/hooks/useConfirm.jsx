import {useState} from "react";
import PopupModel from "../components/PopupModel.jsx";

function UseConfirm() {
    const [dialog, setDialog] = useState(null);

    function confirm() {
        return new Promise((resolve) => {
            setDialog({resolve});
        });
    }

    function handleSubmit() {
        dialog.resolve(true);
        setDialog(null);
    }

    function handleClose() {
        dialog.resolve(false);
        setDialog(null);
    }

    function Confirm({message, children, buttonText}) {
        return dialog ?
            <PopupModel message={message} onSubmit={handleSubmit}
                        onClose={handleClose} custom={children}
                        buttonText={buttonText}/> : null;
    }

    return [confirm, Confirm];
}

export default UseConfirm;