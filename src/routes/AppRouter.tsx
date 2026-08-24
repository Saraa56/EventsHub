import { Routes, Route } from "react-router-dom"

import Login from "../pages/Login/Login"
import Register from "../pages/register/Register"
import Dashboard from "../features/dashboard/pages/Dashboard"
import ProtectedRoute from './ProtectedRoute';
import MainLayout from "../components/layaout/MainLayout";
import Home from "../pages/Home/Home";
import LandingLayout from "../components/layaout/LandingLayout";
import Explorer from "../pages/Explorer/Explorer";

function AppRouter(){
    return(
        <Routes>
            <Route element={<LandingLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/explore" element={<Explorer/>}/>
            </Route>

            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute/>} >
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter