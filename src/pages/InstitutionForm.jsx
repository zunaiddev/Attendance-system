import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import useGet from "../hooks/useGet.jsx";
import InputField from "../components/Fields/InputField.tsx";
import SelectField from "../components/Fields/SelectField.tsx";
import {courses} from "../Data/courses.js";
import {semesters} from "../Data/semesters.js";
import Button from "../components/Buttons/Button.tsx";
import {years} from "../Data/years.js";
import usePut from "../hooks/userPut.js";
import getToken from "../utils/getToken.js";
import {toast} from "../components/Toaster/Toaster.js";
import {useLocation, useNavigate} from "react-router-dom";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";

function InstitutionDetailsForm() {
    const {
        register, handleSubmit, watch, setValue,
        formState: {errors, isSubmitting}, reset
    } = useForm();
    const [showList, setShowList] = useState(false);
    const [list, setList] = useState([]);
    const university = watch("university");
    const {get, loading} = useGet();
    const [put] = usePut();
    const containerRef = useRef(null);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();


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
        setUser(location?.state?.user);
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowList(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [location]);

    useEffect(() => {
        console.log("user", user);
    }, [user]);


    async function onSubmit(data) {
        data.name = user.name;
        const [res, error] = await put("/user", data, await getToken());

        if (error) {
            toast.error("Something went wrong!");
            return;
        }

        toast.success("Successfully updated");
        reset();
        navigate("/dashboard");
    }

    if (user === undefined) {
        return <SomethingWentWrong/>;
    }

    return (
        <div className="h-full w-full bg-gray-800">
            <div>
                <div
                    className="flex items-center justify-between p-4 md:p-5">
                    <div className="flex gap-4 items-center">
                        <h3 className="text-xl font-semibold text-white">
                            Institution Details
                        </h3>

                        {/*<div className="relative group">*/}
                        {/*    <InfoIcon className="size-5 text-gray-400 cursor-pointer"/>*/}

                        {/*    <div*/}
                        {/*        className="w-60 absolute bg-gray-800 z-10 top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 p-3 rounded-md hidden group-hover:block shadow-sm shadow-gray-500">*/}
                        {/*        <div*/}
                        {/*            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-800"/>*/}

                        {/*        <p>*/}
                        {/*            This is a text that should be display inside info and there is another txt*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="w-full h-[calc(100vh-120px)] p-6 flex flex-col justify-between">
                <div className="space-y-9">
                    <div className="relative" ref={containerRef}>
                        <InputField label="University"
                                    register={register("university", {
                                        required: "University is required",
                                    })} error={errors.university}/>
                        {showList &&
                            <div
                                className="absolute z-50 w-full py-3 space-y-3 bg-gray-800 rounded-md max-h-80 translate-y-1">
                                {list?.length <= 0 ? (loading ? <p>loading...</p> : <p>Not Found</p>) :
                                    <ul className="overflow-y-auto h-full">
                                        {list.map(item => (
                                            <li key={item.id} onClick={() => handleOnClick(item.name)}
                                                className="capitalize cursor-pointer hover:bg-gray-500/20 p-2 pl-3">{item.name}</li>))}
                                    </ul>}

                            </div>
                        }
                    </div>

                    <InputField label="Section"
                                register={register("section", {
                                    required: "Section is required",
                                    pattern: {value: /^[A-Z](-?\d{0,2})?$/i, message: "Invalid Section"},
                                })} error={errors.section}/>

                    <SelectField list={courses} label="Course" className="border-none"
                                 register={register("course", {
                                     required: "Course is required"
                                 })} error={errors.course}/>

                    <SelectField label="Semester" list={semesters} className="border-none"
                                 register={register("semester", {
                                     required: "Semester is required"
                                 })} error={errors.semester}/>

                    <SelectField label="Year" list={years} className="border-none"
                                 register={register("year", {
                                     required: "Year is required",
                                 })} error={errors.year}/>
                </div>

                <div className="flex justify-end">
                    <Button text="Skip" type="button" className="bg-gray-500 hover:bg-gray-600 px-8"
                            isSubmitting={isSubmitting}/>
                    <Button text="Next" type="submit" className="px-9" isSubmitting={isSubmitting}/>
                </div>
            </form>
        </div>
    );
}

InstitutionDetailsForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default InstitutionDetailsForm;