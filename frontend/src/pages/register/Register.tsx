import { useState, type FormEvent } from 'react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import  * as validators from '../../utils/validators';
import * as authService from '../../services/authServices'

function Register() {
    
    const [name,  setName] = useState('');
    const [lastName,  setLastName] = useState('');
    const [email,  setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const [confirmPassword,  setConfirmPassword] = useState('');
     
    const [nameError,  setNameError] = useState('');
    const [lastNameError,  setLastNameError] = useState('');
    const [emailError,  setEmailError] = useState('');
    const [passwordError,  setPasswordError] = useState('');
    const [confirmPasswordError,  setConfirmPasswordError] = useState('');
      
    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        const errors = validators.validateRegister(name, lastName, email, password, confirmPassword);

        setNameError(errors.name);
        setLastNameError(errors.lastName);
        setEmailError(errors.email);
        setPasswordError(errors.password);
        setConfirmPasswordError(errors.confirmPassword);

        if(errors.hasError){
            return;
        }
        type RegisterResponse = { success: boolean; message?: string };
        const response = await authService.register(name, lastName, email, password) as RegisterResponse

    
            alert(response.message)
     
    }
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              
            <header className="border-b border-gray-900/10 pb-6 mb-6">
                <h1 className="text-lg font-semibold text-gray-900">
                    Registro
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                    Regístrese para crear una cuenta en EventHub:
                </p>
            </header>
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                <Input type={'text'} id={'user_name'} label={'Nombre de usuario'} placeholder={'Ingrese su nombre'} value={name} onChange={(e) => setName(e.target.value)} error={nameError}/>
                </div>
                <div className='mb-5'>
                <Input type={'text'} id={'user_lastname'} label={'Apellido de usuario'} placeholder={'Ingrese su apellido'} value={lastName} onChange={(e) => setLastName(e.target.value)} error={lastNameError}/>
                </div>
                <div className='mb-5'>
                <Input type={'email'} id={'user_email'} label={'Correo'} placeholder={'Ingrese su correo'} value={email} onChange={(e) => setEmail(e.target.value)} error={emailError}/>
                </div>
                <div className='mb-5'>
                <Input type={'password'} id={'user_password'} label={'Contraseña'} placeholder={'Ingrese su contraseña'} value={password} onChange={(e) => setPassword(e.target.value)} error={passwordError} />
                </div>
                <div className='mb-5'>
                <Input type={'password'} id={'confirm_password'} label={'Confirmar Contraseña'} placeholder={'Ingrese su contraseña nuevamente'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={confirmPasswordError}/>
                </div>
                <Button id={'button_register'} className="w-full mt-2" type='submit'>
                    Registrarse
                </Button>
            </form>
            </div>
        </main>
    )
}
export default Register