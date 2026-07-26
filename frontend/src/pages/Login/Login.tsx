import { useState, type FormEvent } from 'react';
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import * as validators from '../../utils/validators'
import * as authService from '../../services/authServices'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    
    const errors = validators.validateLogin(email, password);

    setEmailError(errors.email);
    setPasswordError(errors.password);

    if (errors.hasError) {
      // alert("Por favor corrija los errores antes de enviar el formulario");
      return;
    }

    type LoginResponse = { success: boolean; message?: string };
    const response = (await authService.login(email, password)) as LoginResponse;

    if (response.success) {
      alert(response.message);
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
          <Input
            type={'email'}
            id={'user_email'}
            label={'Correo'}
            placeholder={'Ingrese su correo'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <Input
            type={"password"}
            id={'user_contrasena'}
            label={'Contraseña'}
            placeholder={'Ingrese su contraseña'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />

          <Button id={'button_login'} className="w-full mt-2" type='submit'>
            Iniciar Sesion
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Login