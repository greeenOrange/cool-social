import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';



const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    console.log("User: ", user ? user.email : "Not authenticated");
    console.log("Location: ", location.pathname);
    if(loading){
        return <div className='text-center mt-36'><button className="btn h-full loading">loading</button></div>
    }
    if(!user){
        return <Navigate to='/login' state={{ from: location}} replace></Navigate>
    }
    return children
};

export default RequireAuth;