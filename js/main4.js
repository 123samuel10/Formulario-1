const alerta=document.querySelector('input');
function domprincipal(){
    alert('Se envio el registro al servidor')
}
const titulo=document.querySelector('p')
const creando=document.createElement('p');

creando.textContent='Formulario N4';
titulo.appendChild(creando);

const subtitulo=document.querySelector('.nombre');
const parrafo=document.createElement('p');

parrafo.innerHTML='Mi nombre es Samuel Salcedo Ramirez'
subtitulo.appendChild(parrafo);

// }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
const teclado=document.getElementById('nombre');
teclado.addEventListener('keydown', function(e){
    console.log('estas presionando la tecla: ',e.key)
})

const guardar=document.querySelector('form');
guardar.addEventListener('submit',function(e){
    e.preventDefault()
    let mail=document.getElementById('correo').value
    console.log(mail);
})

const lista=document.querySelector('.listas');

const descripcion=document.createElement('li');


descripcion.textContent='hola';

lista.appendChild(descripcion);

const parrafoDos=document.querySelector('.parrafo')
const creandoparrafo=document.createElement('p');
creandoparrafo.innerHTML='este es un dia muy bonito';
parrafoDos.appendChild(creandoparrafo)

// ------------------------------------------------------------------
const apellido=document.getElementById('apellido');
apellido.addEventListener('keydown',function(e){
    console.log('estas presionando la tecla: ',e.key)
})
