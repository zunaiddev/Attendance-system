import InputField from "../others/InputField.tsx";
import SelectField from "../others/SelectField.jsx";
import PropTypes from "prop-types";
import {courses} from "../../Data/courses.js";
import {semesters} from "../../Data/semesters.js";
import {years} from "../../Data/years.js";
import TrashIcon from "../icons/TrashIcon.jsx";

function StudentFields({index, register, errors, remove, rolls, update, onChange}) {

    return (
        <div className="flex flex-col gap-4 sm:flex-row border-2 rounded-sm p-1 sm:border-0 sm:p-0">
            <div className="flex items-center h-10 w-29">
                {update ? <input type="checkbox" value="" onChange={(e) => onChange(e)}
                                 className='w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800 cursor-pointer'/> : (index !== 0 &&
                    <button type="button" onClick={remove}>
                    <TrashIcon className="text-gray-300 size-4 cursor-pointer"/>
                    </button>)}
            </div>

            <InputField placeholder="Name"
                        register={register(`students.${index}.name`, {
                            required: "Name is required",
                            pattern: {value: /^[A-Za-z ]{2,50}$/, message: "Invalid Name"},
                        })}
                        error={errors?.students?.[index]?.name}/>
            <InputField placeholder="Roll"
                        register={register(`students.${index}.roll`, {
                            required: "Roll is required",
                            pattern: {value: /^[A-Za-z]{0,5}[-/]?\d{2,4}[-/]?\d{1,6}$/, message: "Invalid Roll number"},
                            validate: (value) => rolls.some(roll => roll === value) ? "Roll already exists" : true,
                        })}
                        error={errors?.students?.[index]?.roll}/>
            <InputField placeholder="Section"
                        register={register(`students.${index}.section`, {
                            required: "Section is required",
                            pattern: {value: /^[A-Z](-?\d{0,2})?$/i, message: "Invalid Section"},
                        })}
                        error={errors?.students?.[index]?.section}/>
            <SelectField list={courses} defaultOpt="Course"
                         register={register(`students.${index}.course`, {
                             required: "Course is required"
                         })}
                         error={errors?.students?.[index]?.course}
                         className="shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 !py-2.5 bg-gray-700"/>
            <SelectField list={semesters} defaultOpt="Semester"
                         register={register(`students.${index}.semester`, {
                             required: "Semester is required"
                         })}
                         error={errors?.students?.[index]?.semester}
                         className="shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 !py-2.5 bg-gray-700"/>
            <SelectField list={years} defaultOpt="Year"
                         register={register(`students.${index}.year`, {
                             required: "Year is required"
                         })}
                         error={errors?.students?.[index]?.year}
                         className="shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 !py-2.5 bg-gray-700"/>
        </div>
    );
}

StudentFields.propTypes = {
    index: PropTypes.number.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    update: PropTypes.bool.isRequired,
    rolls: PropTypes.array.isRequired,
}

export default StudentFields;