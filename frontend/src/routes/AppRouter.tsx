import { Routes, Route } from "react-router-dom"

import Login from "../pages/Login/Login"
import Register from "../pages/register/Register"
import Dashboard from "../features/dashboard/pages/Dashboard"
import ProtectedRoute from './ProtectedRoute';
import MainLayout from "../components/layaout/MainLayout";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
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