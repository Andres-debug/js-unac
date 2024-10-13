const formulario = document.getElementById('formularioRegistro')
const nombre = document.getElementById('nombre')
const correo = document.getElementById('correo')
const password = document.getElementById('password')
const mensajeExito = document.getElementById('mensajeExito')


formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();

    let nombreValido = validarNombre();
    let correoValido = validarCorreo();
    let passwordValido = validarPassword();

    if( nombreValido && correoValido && passwordValido){
        mensajeExito.style.display = 'block'
    }else{
        mensajeExito.style.display = 'none'
    }

})

nombre.addEventListener('input',validarNombre);
correo.addEventListener('input',validarCorreo);
password.addEventListener('input',validarPassword);

function validarNombre(){
    const nombreValor = nombre.value.trim();

    if (nombreValor=== ''){
        mostrarError(nombre,'El nombre es obligatorio')
        return false;
    }else{
        mostrarExito(nombre);
        return true;
    }
}

function validarCorreo(){
    const correoValor = correo.value.trim();
    const regexCorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(correo===''){
        mostrarError(correo,'El correo es obligatorio')
        return false;
    }else if(!regexCorreo.test(correoValor)){
        mostrarError(correo,'El correo no es valido')
    }else{
        mostrarExito(correo);
        return true;
    }
}

function validarPassword(){
    const passwordValor = password.value.trim();
    if(passwordValor.length<8){
        mostrarError(password,'La contraseña debe tener al menos 8 caracteres')
        return false;
    }else{
        mostrarExito(password);
        return true;
    }
}

function mostrarError(campo,mensaje){
    const formControl = campo.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.textContent = mensaje
}

function mostrarExito(campo){
    const formControl = campo.parentElement;
    formControl.className = 'form-control success'
}