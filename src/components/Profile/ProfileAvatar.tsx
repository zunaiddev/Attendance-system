interface Props {
    text: string,
    src?: string | null,
}

function ProfileAvatar({text, src}: Props) {
    return (
        <div className={`size-23 rounded-full flex justify-center items-center ${src ? "border" : "bg-amber-400"}`}>
            {
                src ? <img src={src} alt="User Avatar" className="size-full"/>
                    : <span className="text-3xl font-semibold">{text}</span>
            }
        </div>
    );
}

export default ProfileAvatar;