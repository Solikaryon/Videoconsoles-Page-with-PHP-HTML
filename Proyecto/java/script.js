/* const { flexwrap } = require("modernizr"); */

const datos = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulariojs');

nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit',function(evento) {
    evento.preventDefault();
    const { nombre, email, telefono ,mensaje } = datos;
if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
    /* mostrarAlerta('Todos los campos son obligatorios',true); */
    mostrarAlerta('Todos los campos son obligatorios',true);

    return;
}
    mostrarAlerta('Correcto :)');
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos); 
}

const parrafo = document.createElement('P');

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    

    formulario.appendChild( error );
    
    setTimeout(()=> {
        error.remove();
    }, 5000)
}

function mostrarCorrecto(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    

    formulario.appendChild( correcto );
    
    setTimeout(()=> {
        correcto.remove();
    }, 5000)
}

function mostrarAlerta(mensaje,error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild( alerta );
    setTimeout(()=> {
        correcto.remove();
    }, 3000);
}  
