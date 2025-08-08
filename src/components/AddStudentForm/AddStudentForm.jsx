import InputField from "../others/InputField.jsx";
import SelectField from "../others/SelectField.jsx";

function AddStudentForm() {
    return (
        <div
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center bg-red-500 size-full">
            <div className="relative p-4 w-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-600">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                        <button type="button"
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <div className="flex gap-4">
                            <InputField label="Name" name="name" type="text"/>
                            <InputField label="Roll no." name="name" type="text"/>
                            <SelectField label="Course" list={["BCA", "MCA"]}/>
                            <InputField label="Sec" name="name" type="text"/>
                            <InputField label="Semester" name="name" type="text"/>
                            <InputField label="Year" name="name" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStudentForm;