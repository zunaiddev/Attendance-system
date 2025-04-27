import {useLocation} from 'react-router-dom';
import 'nprogress/nprogress.css';

function ProgressBar() {
    const location = useLocation();
    //
    // useEffect(() => {
    //
    //     console.log("function called")
    //     const timeout = setTimeout(() => {
    //         NProgress.done();
    //         console.log("function end")
    //     }, 2000);
    //
    //     return () => {
    //         clearTimeout(timeout);
    //     };
    // }, []);

    return null;
}

export default ProgressBar;