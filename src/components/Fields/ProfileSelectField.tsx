import SelectField from "./SelectField";
import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    label: string,
    list: Array<string> | Array<number> | Array<{
        value: string | number,
        text: string
    }>;
    register: UseFormRegisterReturn;
}

function ProfileSelectField({label, list, register}: Props) {
    return (
        <SelectField label={label} list={list} register={register} error={undefined}
                     className="py-2 border-gray-700 border text-sm "
                     background="bg-gray-800"/>
    );
}

export default ProfileSelectField;