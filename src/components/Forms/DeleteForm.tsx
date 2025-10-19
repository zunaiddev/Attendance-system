import {useForm} from "react-hook-form";
import FloatForm from "./FloatForm";
import ProfileInput from "../Fields/ProfileInput";
import ForgetPasswordField from "./ForgetPasswordField";
import Label from "../Label";

interface Props {
    onHide: () => void;
}

function DeleteForm({onHide}: Props) {
    const {
        register,
        handleSubmit,
        formState: {isSubmitting, errors}
    } = useForm();

    async function onSubmit(data: unknown) {
        console.log(data);
    }

    function handleHide() {
        if (!isSubmitting) onHide();
    }

    return (
        <FloatForm title="Delete Account Permanently" btnText="Delete Account"
                   className="bg-red-500 text-white border-none hover:text-white hover:bg-red-500/80"
                   desc="This action cannot be undone. This will permanently delete your account and remove all data from our servers."
                   isSubmitting={isSubmitting}
                   isDisabled={false} onHide={handleHide}
                   onSubmit={handleSubmit(onSubmit)} gridCols={1}>
            <Label text="All your data will be permanently lost"/>
            <ProfileInput
                label="Confirm Passeord"
                type="password"
                placeholder="Enter Your Password"
                register={register("password", {
                    required: "Please enter your password",
                })}
                error={errors.password}/>
            <ForgetPasswordField/>
        </FloatForm>
    );
}

export default DeleteForm;