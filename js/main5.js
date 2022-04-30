const alerta=document.getElementById('input');
function domnose(){
    alert('se envio el registro')
}

const names=document.getElementById('nombre');
names.addEventListener('keydown', function(e){
    console.log('presionastes la tecla: ',e.key)
})


const email=document.querySelector('form');
email.addEventListener('submit', function(e){
    e.preventDefault();
    let mail=document.getElementById('correo').value;
    console.log(mail)
})