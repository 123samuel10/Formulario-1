const enviar=document.querySelector('enviar');
function dom2(){
    alert('Se registro correctamente');
}

const cambiar=document.querySelector('h1');
cambiar.innerHTML='Formulario N3';

const teclado=document.getElementById('nombre');
teclado.addEventListener('keydown',function(e){
    console.log('acabas de presionar la tecla: ', e.key)
})


const mostrar=document.querySelector('form');
mostrar.addEventListener('submit',function(e){
    

    e.preventDefault();
    let email=document.getElementById('email-form').value
    console.log(email);
})