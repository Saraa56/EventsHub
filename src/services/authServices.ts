const mockUser ={
    email:"sotero@sotero.com",
    password: "Sara1272."
}
const mockRegisterUser = {
    name: "Sara",
    lastName: "Otero",
    email:"sotero@sotero.com",
    password: "Sara1272."
}

export async function login(email:string, password: string){
    return new Promise((resolve =>{
        setTimeout(() => {
            if(email === mockUser.email && password === mockUser.password){
                resolve({
                    success: true,
                    message: "Inicio de sesión exitoso"
                })
            }else{
                resolve({
                    success: false,
                    message: "Credenciales inválidas"
                })
            }
        },2000)
    }))
}

export async function register(name: string, lastName: string, email:string, password: string){
    return new Promise((resolve =>{
        setTimeout(() => { 
        if(email === mockRegisterUser.email){
            resolve({
                success: false,
                message: "El correo ya está registrado"
            })
        } else {
            resolve({
                success: true,
                message: "Registro exitoso"
            })
        }
        },2000)
    }))
}