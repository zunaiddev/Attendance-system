import CloseIcon from "../icons/CloseIcon.tsx";
import InputField from "../others/InputField.tsx";
import {useForm} from "react-hook-form";
import SelectField from "../others/SelectField.tsx";
import {courses} from "../../Data/courses.js";
import {years} from "../../Data/years.js";
import {semesters} from "../../Data/semesters.js";
import Button from "../others/Button.tsx";
import InfoIcon from "../icons/InfoIcon.jsx";
import {useEffect, useRef, useState} from "react";
import useGet from "../../hooks/useGet.jsx";

function InstitutionDetailsForm() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors, isSubmitting},
    } = useForm();
    const [showList, setShowList] = useState(false);
    const [list, setList] = useState([]);
    const university = watch("university");
    const {get, loading} = useGet();
    const containerRef = useRef(null);

    function handleOnClick(value) {
        setShowList(false);
        setValue("university", value);
    }

    useEffect(() => {
        if (university?.trim()) {
            (async function () {
                setShowList(true);
                let response = await get(`/public/university?search=${university}`);
                setList(response.data);
            })();
            return;
        }

        setList([]);
    }, [get, university]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowList(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    function onSubmit(data) {
        console.log("Form Data: ", data);
    }

    return (
        <div className="fixed top-0 right-0 h-screen w-screen flex justify-center pt-20 p-5">
            <div className="relative rounded-lg shadow-sm bg-gray-600 w-full max-w-lg h-fit">
                <div
                    className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                    <div className="flex gap-4 items-center">
                        <h3 className="text-xl font-semibold text-white">
                            Institution Details
                        </h3>

                        <div className="relative group">
                            <InfoIcon className="size-5 text-gray-400 cursor-pointer"/>

                            <div
                                className="w-60 absolute bg-gray-800 z-10 top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 p-3 rounded-md hidden group-hover:block shadow-sm shadow-gray-500">
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-800"/>

                                <p>
                                    This is a text that should be display inside info and there is another txt
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-500 hover:text-white cursor-pointer">
                        <CloseIcon/>
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full p-6 space-y-5">
                        <div className="relative" ref={containerRef}>
                            <InputField placeholder="University"
                                        register={register("university", {
                                            required: "University is required",
                                        })} error={errors.university}/>
                            {showList &&
                                <div
                                    className="absolute z-50 w-full py-3 space-y-3 bg-gray-800 rounded-md max-h-80 translate-y-1">
                                    {list.length <= 0 ? (loading ? <p>loading...</p> : <p>Not Found</p>) :
                                        <ul className="overflow-y-auto h-full">
                                            {list.map(item => (
                                                <li key={item.id} onClick={() => handleOnClick(item.name)}
                                                    className="capitalize cursor-pointer hover:bg-gray-500/20 p-2 pl-3">{item.name}</li>))}
                                        </ul>}

                                </div>
                            }
                        </div>

                        <SelectField defaultOpt="Course" list={courses}
                                     register={register("course", {
                                         required: "Course is required"
                                     })} error={errors.course}/>

                        <InputField placeholder="Section"
                                    register={register("section", {
                                        required: "Section is required",
                                        pattern: {value: /^[A-Z](-?\d{0,2})?$/i, message: "Invalid Section"},
                                    })} error={errors.section}/>

                        <SelectField defaultOpt="Semester" list={semesters}
                                     register={register("semester", {
                                         required: "Semester is required"
                                     })} error={errors.semester}/>

                        <SelectField defaultOpt="Year" list={years}
                                     register={register("year", {
                                         required: "Year is required",
                                     })} error={errors.year}/>

                        <Button text="Submit" type="submit" className="!w-full" isSubmitting={isSubmitting}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InstitutionDetailsForm;