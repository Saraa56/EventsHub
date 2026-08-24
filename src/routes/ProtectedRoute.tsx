import { Navigate, Outlet } from "react-router-dom";
import { STORAGE_KEYS } from "../constants/storage";

export function ProtectedRoute(){
    const isAuthenticated = localStorage.getItem(STORAGE_KEYS.IS_AUTHENTICATED) ;

    if(!isAuthenticated){
        return <Navigate to="/" replace/>
    }
    return <Outlet />
}
export default ProtectedRoute;