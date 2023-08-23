import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {

    const [user, loading ] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <div className='text-center mt-36'><button className="btn h-full loading">loading</button></div>
    }
    if(!user){
        return <Navigate to='/login' state={{ from: location}} replace></Navigate>
    }
    return children
};

export default RequireAuth;