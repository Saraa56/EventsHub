import { useState, type FormEvent } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import * as validators from '../../utils/validators';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authServices';
import type { AuthResponse } from "../../types/auth";
import { STORAGE_KEYS } from '../../constants/storage';
import { CalendarDays, Mail, Lock, Menu, X } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  // Estado para el menú desplegable en móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errors = validators.validateLogin(email, password);

    setEmailError(errors.email);
    setPasswordError(errors.password);

    if (errors.hasError) {
      return;
    }

    const response = await login(email, password) as AuthResponse;

    if (response.success) {
      localStorage.setItem(STORAGE_KEYS.IS_AUTHENTICATED, "true");
      alert(response.message);
      navigate("/dashboard");
    } else {
      alert(response.message);
    }
  }

  return (
    <main className="min-h-screen bg-[#060203] text-[#F0EAE4]">
      {/* NAVBAR RESPONSIVE */}
      <nav className="relative border-b border-[#1C1112]">
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
              to="/events" 
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
                to="/events"
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

      {/* SECCIÓN PRINCIPAL DE LOGIN */}
      <section className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Imagen Lateral con Difuminado */}
        <div className="relative hidden overflow-hidden lg:block
            [mask-image:linear-gradient(to_right,black_60%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]
            [mask-size:cover]
            [mask-position:center]">

          <img
            src="../../public/fondo_auth.png"
            alt="Decoración de un evento"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute bottom-12 left-12 max-w-lg">
          

            <p className="font-serif text-2xl font-semibold leading-tight">
              Donde los eventos extraordinarios cobran vida.
            </p>
            <small className="mt-3 block text-sm text-[#8F817B]">
              Únete a nuestra comunidad y descubre experiencias únicas que te dejarán recuerdos inolvidables.
            </small>
          </div>
        </div>

        {/* Formulario */}
        <div className="flex items-center justify-center px-6 py-12 lg:px-16">
          <div className="w-full max-w-lg">
            <div className="mb-10">
              <p className="mb-3 text-xs uppercase tracking-widest text-[#B5A89E]">
                Acceso
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold">
                Bienvenido de vuelta
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                id="user_email"
                label="Correo electrónico"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                icon={Mail}
              />

              <Input
                type="password"
                id="user_contrasena"
                label="Contraseña"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                icon={Lock}
              />

              <Button
                id="button_login"
                className="mt-2 w-full py-4"
                type="submit"
              >
                Iniciar sesión
              </Button>
            </form>

            <div className="mt-8 border-t border-[#1C1112] pt-8 text-center">
              <p className="text-sm text-[#8F817B]">
                ¿No tienes cuenta?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#F0EAE4] hover:text-[#B5A89E]"
                >
                  Regístrate gratis
                </Link>
              </p>

              <Link
                to="/"
                className="mt-6 inline-block font-mono text-sm text-[#8F817B] hover:text-[#F0EAE4]"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;