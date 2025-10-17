import Card from "../Cards/Card";
import Academic from "../../types/Academic";
import {JSX} from "react";
import FormatNumber from "../../utils/formatNumber";

interface props {
    academic: Academic
}

function AcademicInfo({academic}: props): JSX.Element {
    return (
        <Card title="Academic Information" desc="Educational details and current enrollment">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Info title="University" value={academic.university}/>
                <Info title="Course" value={academic.course}/>
                <Info title="Section" value={academic.section}/>
                <Info title="Year" value={FormatNumber(academic.year)}/>
                <Info title="Semester" value={FormatNumber(academic.semester)}/>
            </div>
        </Card>
    );
}

function Info({title, value}: { title: string, value: string }) {
    return <div className="space-y-1">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-white">{value}</p>
    </div>
}

export default AcademicInfo;