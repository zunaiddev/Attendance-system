import logo from '../assets/logo.svg';

function MainLoader() {
    return (
        <div className="w-full h-full flex justify-center items-center ">
            <div className="size-20 animate-pulse">
                <img className="size-full" src={logo} alt="logo"/>
            </div>
        </div>
    );
}

export default MainLoader;