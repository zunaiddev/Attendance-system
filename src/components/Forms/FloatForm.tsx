import {BaseSyntheticEvent, JSX, ReactNode, useEffect} from "react";
import Card from "../Cards/Card";
import Button from "../Buttons/Button";
import {Save, X} from "lucide-react";

interface Props {
    children: ReactNode;
    isSubmitting: boolean;
    isDisabled: boolean;
    onHide: () => void;
    onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
    gridCols?: number;
}

function FloatForm({children, isSubmitting, isDisabled, onHide, onSubmit, gridCols = 2}: Props): JSX.Element {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <div className="h-screen bg-gray-700/50 flex justify-center items-center fixed inset-0" onClick={onHide}>
            <form onSubmit={onSubmit} className="max-w-xl w-full relative"
                  onClick={e => e.stopPropagation()}>
                <Card title="Edit Profile" desc="Update your profile information and academic details"
                      button={<button
                          className="text-white absolute right-3 top-3 cursor-pointer disabled:cursor-not-allowed"
                          onClick={onHide} disabled={isSubmitting}>
                          <X/>
                      </button>}>

                    <Card title="Personal Information" className="p-0">
                        <div className={`grid grid-cols-${gridCols} gap-6`}>
                            {children}
                        </div>
                    </Card>

                    <div className="w-full flex justify-end items-center mt-10">
                        <Button text="Cancel" disable={isSubmitting} onClick={onHide}
                                className="bg-transparent border py-2 hover:bg-white hover:text-gray-800 disabled:text-gray-800 disabled:bg-gray-300/40"/>
                        <Button text="Save Changes" icon={Save}
                                className="bg-white text-gray-800 border py-2 hover:bg-gray-300 disabled:text-gray-700 disabled:bg-gray-100/70"
                                isSubmitting={isSubmitting} disable={isDisabled}/>
                    </div>
                </Card>
            </form>
        </div>
    );
}

export default FloatForm;