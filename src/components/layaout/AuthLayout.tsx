import { type ReactNode} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

interface AuthLayoutProps {
  children: ReactNode;
  badge: string;
  title: string;
  showBackHome?: boolean;
  createAccount: string;
  metodoAuth:string;
  textAuth: string;
}

function AuthLayout({children, badge, title, showBackHome, createAccount, metodoAuth, textAuth}: AuthLayoutProps) {


  return (
    <main className="min-h-screen bg-[#060203] text-[#F0EAE4]">
      {/* NAVBAR RESPONSIVE */}
      <Navbar />

      {/* SECCIÓN PRINCIPAL */}
      <section className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Imagen Lateral con Difuminado */}
        <div className="relative hidden overflow-hidden lg:block
            [mask-image:linear-gradient(to_right,black_60%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]
            [mask-size:cover]
            [mask-position:center]">

          <img
            src="/fondo_auth.png"
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


        <div className="flex items-center justify-center px-6 py-12 lg:px-16">
            <div className="w-full max-w-lg">
              <div className="mb-10">
                <p className="mb-3 text-xs uppercase tracking-widest text-[#B5A89E]">
                    {badge}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold">
                    {title}
                </h1>
              </div>
                 {/* Contenido de la Página (Formulario) */}
                {children}

            <div className="mt-8 border-t border-[#1C1112] pt-8 text-center">
              <p className="text-sm text-[#8F817B]">
                {createAccount}{" "}
                <Link
                    to={`/${metodoAuth}`}
                  className="font-semibold text-[#F0EAE4] hover:text-[#B5A89E]"
                >
                  {textAuth}
                </Link>
              </p>

               {showBackHome && (
                    <Link
                        to="/"
                        className="mt-6 inline-block font-mono text-sm text-[#8F817B] hover:text-[#F0EAE4]"
                    >
                        ← Volver al inicio
                    </Link>
                )}
            </div>

               
                 
            </div>
        </div>
      </section>
    </main>
  );
}

export default AuthLayout;