// alert("probando enlace js")

let btnMenu = document.getElementById('btn-menu');
let nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar'); //Toggle funciona como un interruptor. Si el elemento .nav no tiene la clase 'mostrar se la coloca y viseversa'
  /* 1. Pasar a style.css y crear la clase .mostrar
     2. Luego ir al inspector de elementos del navegador y revisar como aparce y desaparece la clase mostrar en el elemento nav*/
})