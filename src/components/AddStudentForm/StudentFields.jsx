import InputField from "../others/InputField.jsx";
import SelectField from "../others/SelectField.jsx";
import PropTypes from "prop-types";
import {courses} from "../../Data/courses.js";
import {semesters} from "../../Data/semesters.js";
import {years} from "../../Data/years.js";

function StudentFields({index, register, errors}) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row border-2 rounded-sm p-1 sm:border-0 sm:p-0">
            <InputField placeholder="Name"
                        register={register(`students.${index}.name`, {
                            required: "Name is required",
                            pattern: {value: /^[A-Za-z ]{2,50}$/, message: "Invalid Name"},
                        })}
                        errors={errors?.students?.[index]?.name}/>
            <InputField placeholder="Rollno"
                        register={register(`students.${index}.roll`, {
                            required: "Roll is required",
                            pattern: {value: /^[A-Za-z]{0,5}[-/]?\d{2,4}[-/]?\d{1,6}$/, message: "Invalid Roll number"},
                        })}
                        errors={errors?.students?.[index]?.roll}/>
            <InputField placeholder="Section"
                        register={register("students.${index}.section", {
                            required: "Section is required",
                            pattern: {value: /^[A-Z](-?\d{0,2})?$/, message: "Invalid Section"},
                        })}
                        errors={errors?.students?.[index]?.section}/>
            <SelectField list={courses} defaultOpt="Course"
                         register={register(`students.${index}.course`, {
                             required: "Course is required"
                         })}
                         errors={errors?.students?.[index]?.course}
                         className="shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 !py-2.5 bg-gray-700"/>
            <SelectField list={semesters} defaultOpt="Semester"
                         register={register(`students.${index}.semester`, {
                             required: "Semester is required"
                         })}
                         errors={errors?.students?.[index]?.semester}
                         className="shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 !py-2.5 bg-gray-700"/>
            <SelectField list={years} defaultOpt="Year"
                         register={register(`students.${index}.year`, {
                             required: "Year is required"
                         })}
                         errors={errors?.students?.[index]?.year}
                         className="shadow-xs border border-gray-700 text-sm rounded-sm focus:border-blue-500 !py-2.5 bg-gray-700"/>
        </div>
    );
}

StudentFields.propTypes = {
    autoFocus: PropTypes.bool,
    index: PropTypes.number.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default StudentFields;