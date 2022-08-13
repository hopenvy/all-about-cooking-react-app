import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return children ? children : <Outlet />  
};

export default PrivateRoute;
