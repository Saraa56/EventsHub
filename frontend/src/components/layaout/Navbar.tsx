import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import { STORAGE_KEYS } from "../../constants/storage";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem(STORAGE_KEYS.IS_AUTHENTICATED);
        navigate("/");
    }

    return (
        /* 
          1. Fijo arriba: sticky top-0
          2. Prioridad visual: z-50 (asegura que el menú desplegable flote sobre todo)
          3. Efecto difuminado: bg-white/90 backdrop-blur-md
        */
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <nav className="flex justify-between items-center p-3 text-gray-800 px-4">

                <div className="flex items-center">
                    <Link to="/dashboard" className="flex items-center space-x-2">
                        <CiCalendar className="h-6 w-6 bg-cyan-500 text-white rounded border border-cyan-500" />
                        <span className="font-bold text-gray-600">EventHub</span>
                    </Link>
                </div>
                
                <div className="flex w-full justify-start items-center space-x-6 text-left pl-6"> 
                    <NavLink to="/dashboard" className={({isActive}) => isActive ? 'text-cyan-600 font-bold': 'text-gray-600 hover:text-cyan-600 font-medium'}>Dashboard</NavLink>
                    <NavLink to="/events" className={({isActive}) => isActive ? 'text-cyan-600 font-bold': 'text-gray-600 hover:text-cyan-600 font-medium'}>Eventos</NavLink>
                    <NavLink to="/reports" className={({isActive}) => isActive ? 'text-cyan-600 font-bold': 'text-gray-600 hover:text-cyan-600 font-medium'}>Reportes</NavLink>
                </div>
                
                {/* Notificaciones */}
                <div className="flex items-center gap-6">
                    <div>
                        <Link to="/notifications" id="NotificationsNavbar" role="button">
                            <IoMdNotificationsOutline className="h-6 w-6 "/>   
                        </Link>
                    </div>

                    {/* Avatar y menú desplegable */}
                    <div className="relative">
                        <button 
                            id="MenuAvatarNavbar" 
                            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                            className="flex items-center gap-2 text-gray-600 font-medium hover:text-cyan-600 transition-colors focus:outline-none"
                        >
                            <RxAvatar className="h-8 w-8" /> 
                            <span className="text-gray-600 font-medium">Usuario</span>
                        </button>

                        {isMenuOpen && (
                            /* El z-50 aquí garantiza que el menú pase por encima del contenido del Dashboard */
                            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                                <li>
                                    <Link 
                                        to="/profile" 
                                        onClick={() => setIsMenuOpen(false)} 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        Mi perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/settings" 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        Configuración
                                    </Link>
                                </li> 
                                <li>
                                    <button 
                                        onClick={() => { handleLogout() }}
                                        className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100 transition-colors"
                                    >
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>  
        </header>
    );
}

export default Navbar;
