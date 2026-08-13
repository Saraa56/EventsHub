import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { STORAGE_KEYS } from "../../constants/storage";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem(STORAGE_KEYS.IS_AUTHENTICATED);
        setIsMenuOpen(false);
        navigate("/");
    }

    const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-cyan-600 font-bold"
            : "text-gray-600 hover:text-cyan-600 font-medium";

    const mobileNavLinkStyles = ({ isActive }: { isActive: boolean }) =>
        `block px-4 py-3 rounded-md transition-colors ${
            isActive
                ? "bg-cyan-50 text-cyan-600 font-bold"
                : "text-gray-700 hover:bg-gray-100"
        }`;

    return (
        <>
            {/* NAVBAR */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <nav className="flex items-center justify-between px-4 py-3">

                    {/* LOGO */}
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2 shrink-0"
                    >
                        <CiCalendar className="h-6 w-6 bg-cyan-500 text-white rounded border border-cyan-500" />

                        <span className="font-bold text-gray-600">
                            EventHub
                        </span>
                    </Link>

                    {/* NAVEGACIÓN DESKTOP */}
                    <div className="hidden md:flex items-center gap-6 ml-8 mr-auto">
                        <NavLink to="/dashboard" className={navLinkStyles}>
                            Dashboard
                        </NavLink>

                        <NavLink to="/events" className={navLinkStyles}>
                            Eventos
                        </NavLink>

                        <NavLink to="/reports" className={navLinkStyles}>
                            Reportes
                        </NavLink>
                    </div>

                    {/* ACCIONES DESKTOP */}
                    <div className="hidden md:flex items-center gap-6">

                        {/* Notificaciones */}
                        <Link
                            to="/notifications"
                            aria-label="Notificaciones"
                            className="text-gray-600 hover:text-cyan-600 transition-colors"
                        >
                            <IoMdNotificationsOutline className="w-6 h-6" />
                        </Link>

                        {/* Usuario */}
                        <div className="relative">

                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors focus:outline-none"
                            >
                                <RxAvatar className="w-8 h-8" />

                                <span className="font-medium">
                                    Usuario
                                </span>
                            </button>

                            {/* DROPDOWN */}
                            {isMenuOpen && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">

                                    <Link
                                        to="/profile"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Mi perfil
                                    </Link>

                                    <Link
                                        to="/settings"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Configuración
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Cerrar sesión
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>

                    {/* BOTÓN MOBILE */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden p-2 text-gray-700 hover:text-cyan-600"
                        aria-label="Abrir menú"
                    >
                        <IoMenu className="w-7 h-7" />
                    </button>

                </nav>
            </header>

            {/* SIDEBAR MOBILE */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">

                    {/* OVERLAY */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* SIDEBAR */}
                    <aside className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl">

                        {/* HEADER SIDEBAR */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">

                            <Link
                                to="/dashboard"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <CiCalendar className="h-6 w-6 bg-cyan-500 text-white rounded border border-cyan-500" />

                                <span className="font-bold text-gray-600">
                                    EventHub
                                </span>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-gray-600 hover:text-cyan-600"
                                aria-label="Cerrar menú"
                            >
                                <IoClose className="w-6 h-6" />
                            </button>

                        </div>

                        {/* NAVEGACIÓN */}
                        <div className="p-4 space-y-2">

                            <NavLink
                                to="/dashboard"
                                onClick={() => setIsMenuOpen(false)}
                                className={mobileNavLinkStyles}
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/events"
                                onClick={() => setIsMenuOpen(false)}
                                className={mobileNavLinkStyles}
                            >
                                Eventos
                            </NavLink>

                            <NavLink
                                to="/reports"
                                onClick={() => setIsMenuOpen(false)}
                                className={mobileNavLinkStyles}
                            >
                                Reportes
                            </NavLink>

                            <NavLink
                                to="/notifications"
                                onClick={() => setIsMenuOpen(false)}
                                className={mobileNavLinkStyles}
                            >
                                Notificaciones
                            </NavLink>

                        </div>

                        {/* USUARIO */}
                        <div className="border-t border-gray-200 p-4 mt-2 space-y-2">

                            <NavLink
                                to="/profile"
                                onClick={() => setIsMenuOpen(false)}
                                className={mobileNavLinkStyles}
                            >
                                Mi perfil
                            </NavLink>

                            <NavLink
                                to="/settings"
                                onClick={() => setIsMenuOpen(false)}
                                className={mobileNavLinkStyles}
                            >
                                Configuración
                            </NavLink>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-3 rounded-md text-red-600 hover:bg-red-50 transition-colors"
                            >
                                Cerrar sesión
                            </button>

                        </div>

                    </aside>
                </div>
            )}
        </>
    );
}

export default Navbar;