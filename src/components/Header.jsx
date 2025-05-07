import Switch from "./Switch.jsx";

function Header() {
    return (
        <div className="w-full py-2 flex items-center gap-10">
            <div>
                <Switch label="Auto save"/>
            </div>
            <button className="text-white text-2xl cursor-pointer">+</button>
        </div>
    );
}

export default Header;