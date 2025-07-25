
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";



const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className="flex items-center justify-center h-screen w-full">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>;

};

export default PrivateRoute;
