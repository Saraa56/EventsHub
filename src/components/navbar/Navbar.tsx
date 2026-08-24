import { Link } from 'react-router-dom';
import { CalendarDays, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {

 const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
      {/* NAVBAR RESPONSIVE */}
      <nav className="relative border-b border-[#1C1112] bg-[#060203] text-[#F0EAE4]">
        <div className="flex h-16 items-center justify-between px-6 md:px-16 lg:px-36">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#351C1D]">
              <CalendarDays className="h-4 w-4" />
            </span>
            <span className="font-serif text-md font-semibold">
              EventHub
            </span>
          </Link>

          {/* Menú Desktop (Visibilidad md:flex) */}
          <div className="hidden items-center gap-8 md:flex">
            <Link 
              to="/explore" 
              className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]"
            >
              Explorar
            </Link>

            </div>
            <div className="hidden items-center gap-8 md:flex">

            <div className="flex items-center gap-6">
              <Link 
                to="/login" 
                className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]"
              >
                Iniciar Sesión
              </Link>
              <Link 
                to="/register" 
                className="rounded-md bg-[#351C1D] px-4 py-2 text-sm font-semibold transition hover:bg-[#472628]"
              >
                Registrarse
              </Link>
            </div>
          </div>

          {/* Botón Hamburguesa Móvil (Visibilidad md:hidden) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-[#8F817B] hover:text-[#F0EAE4] focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desplegable Móvil */}
        {isMenuOpen && (
          <div className="border-b border-[#1C1112] bg-[#060203] px-6 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/explore"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]"
              >
                Explorar
              </Link>
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]"
              >
                Iniciar Sesión
              </Link>
              <Link 
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]"
              >
                Registrarse
              </Link>
            </div>
          </div>
        )}
      </nav>

      </>
    );
    }