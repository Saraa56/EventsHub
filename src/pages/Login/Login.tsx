import { useState, type FormEvent } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import * as validators from '../../utils/validators';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authServices';
import type { AuthResponse } from "../../types/auth";
import { STORAGE_KEYS } from '../../constants/storage';
import { Mail, Lock } from 'lucide-react';
import AuthLayout from '../../components/layaout/AuthLayout';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
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

      <AuthLayout badge="Iniciar Sesión" title="Bienvenido de nuevo" showBackHome={true} createAccount="¿No tienes cuenta?" metodoAuth="register" textAuth="Regístrate gratis">
             

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
      </AuthLayout>
    </main>
  );
}

export default Login;