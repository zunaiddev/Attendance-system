import Tag from "../components/Tag.jsx";
import Hr from "../components/Hr.jsx";

function Profile() {
    return (
        <div>
            <div>
                <div className="bg-gray-700 w-1/2 rounded-lg p-4 space-y-14">
                    <div className="space-x-2">
                        <h1 className="text-xl font-bold">Profile picture</h1>
                    </div>
                    <div className="flex gap-3">
                        <span className="rounded-sm bg-gray-400 p-4 text-lg font-bold">
                            ZU
                        </span>
                        <div className="space-y-8">
                            <Tag text="Student"/>
                            <h1 className="text-xl font-bold">John Doe</h1>
                        </div>
                    </div>
                    <Hr/>

                </div>
            </div>

        </div>
    );
}

export default Profile;