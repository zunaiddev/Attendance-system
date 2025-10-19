import FloatForm from "./FloatForm";
import {useForm} from "react-hook-form";
import ProfileInput from "../Fields/ProfileInput";
import ForgetPasswordField from "./ForgetPasswordField";

interface Props {
    onHide: () => void;
}

function DeactivateForm({onHide}: Props) {
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
        <FloatForm title="Deactivate Account" btnText="Deactivate"
                   className="bg-orange-500 text-white border-none hover:text-white hover:bg-orange-500/80"
                   desc="Are you sure you want to deactivate your account? You can reactivate it by logging in again."
                   isSubmitting={isSubmitting}
                   isDisabled={false} onHide={handleHide}
                   onSubmit={handleSubmit(onSubmit)} gridCols={1}>
            <ProfileInput
                label="Confirm Password"
                type="password"
                placeholder="Enter your password"
                register={register("password", {
                    required: "Please enter your password",
                })}
                error={errors.password}/>
            <ForgetPasswordField/>
        </FloatForm>
    );
}

export default DeactivateForm;