const click=document.getElementById('boton')
function dom1(){
    alert('Se ha enviado el mensaje correctamente')
 
}

const cambiar=document.querySelector('h1')
cambiar.innerHTML='Formulario animado';

const teclas=document.getElementById('input')
teclas.addEventListener('keydown',function(e){
    console.log('acabas de presionar la tecla: ',e.key)
})



const teclasDos=document.getElementById('input-apellido');
teclasDos.addEventListener('keydown',function(e){
    console.log('En el espacio de apellido, acabas de presionar la tecla: ',e.key)
})