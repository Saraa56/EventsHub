import { useState, type FormEvent } from 'react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import  * as validators from '../../utils/validators';
import * as authService from '../../services/authServices'
import AuthLayout from '../../components/layaout/AuthLayout';

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
        <main className="min-h-screen bg-[#060203] text-[#F0EAE4]">
            
            <AuthLayout badge="Registrarse" title="Crea tu cuenta" showBackHome={true} createAccount="¿Ya tienes cuenta?" metodoAuth="login" textAuth="Inicia sesión">

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
        </AuthLayout>
        </main>
    )
}
export default Register