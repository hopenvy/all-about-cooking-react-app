import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import * as authService from '../../services/authService';
import { AuthContext } from '../../context/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logoutHandler } = useContext(AuthContext)

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logoutHandler()
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            })
    });

    return null;
}

export default Logout;