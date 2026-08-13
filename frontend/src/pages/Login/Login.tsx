import { useState, type FormEvent } from 'react';
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import * as validators from '../../utils/validators'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authServices';
import type { AuthResponse } from "../../types/auth";
import { STORAGE_KEYS } from '../../constants/storage';

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

    const response = await login(email, password)  as AuthResponse;

    if (response.success) {
      
      localStorage.setItem(STORAGE_KEYS.IS_AUTHENTICATED, "true")
      
      alert(response.message);
      
      navigate("/dashboard");
      
    }else{
      alert(response.message);
    }
    
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
       <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">

        <header className="border-b border-gray-900/10 pb-6 mb-6">
          <h1 className="text-lg font-semibold text-gray-900">
            Inicio de sesión
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Inicia sesión para acceder a EventHub o crea una cuenta.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <Input
            type={'email'}
            id={'user_email'}
            label={'Correo'}
            placeholder={'Ingrese su correo'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
        </div>
        <div className='mb-5'>
          <Input
            type={"password"}
            id={'user_contrasena'}
            label={'Contraseña'}
            placeholder={'Ingrese su contraseña'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
        </div>
          <Button id={'button_login'} className="w-full mt-2" type='submit'>
            Iniciar Sesion
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Login