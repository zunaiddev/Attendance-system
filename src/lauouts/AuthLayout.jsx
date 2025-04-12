import {Outlet} from 'react-router-dom';

function AuthLayout() {
    return (
        <center>
            <Outlet/>
        </center>
    );
}

export default AuthLayout;