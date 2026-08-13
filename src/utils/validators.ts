   const emailRegex = /^\w+@\w+\.\w+$/;
   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;


export function validateLogin(email: string, password: string) {
        
 
    const errors = {
        email: "",
        password: "",
        hasError: false
    }

    if (!email || !email.trim()) {
      errors.email = "El correo es obligatorio";
      errors.hasError = true;
    } else if (!emailRegex.test(email)) {
      errors.email = "El correo no es válido";
      errors.hasError = true;
    }
    if (!password || !password.trim()) {
      errors.password = "La contraseña es obligatoria";
      errors.hasError = true;
    } else if (!passwordRegex.test(password)) {
      errors.password = "Contraseña invalida";
      errors.hasError = true;
    }

    return errors;
}

export function validateRegister(name: string, lastName: string, email: string, password: string, confirmPassword: string) {
    const errors = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        hasError: false
    }

    if (!name || !name.trim()) {
        errors.name = "El nombre es obligatorio";
        errors.hasError = true;
    }
    if (!lastName || !lastName.trim()) {
        errors.lastName = "El apellido es obligatorio";
        errors.hasError = true;
    }
    if (!email || !email.trim()) {
        errors.email = "El correo es obligatorio";
        errors.hasError = true;
    } else if (!emailRegex.test(email)) {
        errors.email = "El correo no es válido";
        errors.hasError = true;
    }
    if (!password || !password.trim()) {
        errors.password = "La contraseña es obligatoria";
        errors.hasError = true;
    } else if (!passwordRegex.test(password)) {
        errors.password = "La contraseña no es válida";
        errors.hasError = true;
    }
    if (!confirmPassword || !confirmPassword.trim()) {
        errors.confirmPassword = "La confirmación de la contraseña es obligatoria";
        errors.hasError = true;
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
        errors.hasError = true;
    }

    return errors;
}