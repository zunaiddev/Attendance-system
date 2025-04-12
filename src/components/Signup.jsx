import InputField from "./common/InputField.jsx";
import LinkField from "./common/LinkField.jsx";

function Signup() {
    return (
        <div className="flex flex-col bg-[var(--bg-color)] py-5 px-7 pb-60 rounded-lg gap-4 shadow-sm sha">
            <div className="flex justify-center">
                <h1 className="heading">Become A Member</h1>
            </div>
            <form>
                <div className="space-y-5 w-xs">
                    <InputField type="text" placeholder="Name" autoComplete="name"/>
                    <InputField type="email" placeholder="Email" autoComplete="email"/>
                    <InputField type="password" placeholder="Password" autoComplete="password"/>
                </div>
            </form>
            <LinkField to="/" text="Home page"/>
        </div>
    );
}

export default Signup;