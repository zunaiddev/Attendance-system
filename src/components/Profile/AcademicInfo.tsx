import Card from "../Cards/Card";
import Academic from "../../types/Academic";
import {JSX, useState} from "react";
import FormatNumber from "../../utils/formatNumber";
import ProfileButton from "./ProfileButton";
import {Pencil} from "lucide-react";
import AcademicUpdateForm from "../Forms/AcademicUpdateForm";

interface props {
    academic: Academic
}

function AcademicInfo({academic}: props): JSX.Element {
    const [updateForm, setUpdateForm] = useState<boolean>(false);

    const show = () => setUpdateForm(true);
    const hide = () => setUpdateForm(false);

    return (<>
            <Card title="Academic Information" desc="Educational details and current enrollment"
                  button={<ProfileButton text="Edit Academic" icon={Pencil} onClick={show}/>}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Info title="University" value={academic.university}/>
                <Info title="Course" value={academic.course}/>
                <Info title="Section" value={academic.section}/>
                <Info title="Year" value={FormatNumber(academic.year)}/>
                <Info title="Semester" value={FormatNumber(academic.semester)}/>
            </div>
        </Card>
            {updateForm && <AcademicUpdateForm academic={academic} hideForm={hide}/>}
        </>
    );
}

function Info({title, value}: { title: string, value: string }) {
    return <div className="space-y-1">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-white">{value}</p>
    </div>
}

export default AcademicInfo;