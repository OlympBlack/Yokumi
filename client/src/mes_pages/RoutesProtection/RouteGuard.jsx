
import { useEffect } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate, Outlet } from 'react-router-dom';

const RouteGuard = ({ authRequired = false, guestOnly = false }) => {
    const { user, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (authRequired && !token) {
            navigate('/connexion');
        } else if (guestOnly && token) {
            navigate('/');
        }
    }, [authRequired, guestOnly, token, navigate]);

    return <Outlet />;
};

export default RouteGuard;