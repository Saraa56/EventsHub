import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" border-b border-[#1C1112] bg-[#060203] ">
      <div className="flex flex-wrap items-center justify-between h-32 gap-6 px-6 py-4 text-[#F0EAE4] md:px-16 lg:px-36">
        
        {/* Izquierda: logo + copyright */}
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#351C1D]">
            <CalendarDays className="h-4 w-4" />
          </span>
          <p className="font-mono text-sm text-[#8F817B] hover:text-[#F0EAE4]">
            &copy; Eventario 2026.
          </p>
        </div>

        {/* Derecha: links */}
        <div className="flex gap-4">
          <Link to="/terms" className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]">
            Términos
          </Link>
          <Link to="/privacy" className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]">
            Privacidad
          </Link>
          <Link to="/contact" className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]">
            Contacto
          </Link>
          <Link to="/help" className="text-sm text-[#8F817B] transition hover:text-[#F0EAE4]">
            Soporte
          </Link>
        </div>

      </div>
    </footer>
  );
}