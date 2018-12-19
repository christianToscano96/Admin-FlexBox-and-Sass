const menuIzquierdo = document.querySelector('.menu-izq');

menuIzquierdo.addEventListener('click', (e) => {

     const claseMenu = e.target.classList;

     //crear variables que seleccionen las flechas y la pagina
     const contenedor = document.querySelector('.pagina'),
           flechaIzq = document.querySelector('.fa-arrow-alt-circle-left'),
           flechaDer = document.querySelector('.fa-arrow-alt-circle-right');

     if(claseMenu.contains('fa-arrow-alt-circle-left') ) {
          //cerrar el menu lateral

          //1ro quitar flechas y mostrar flechas
          flechaIzq.style.display = 'none';
          flechaDer.style.display = 'block';

          //hacer que al apretar me aparezca el menu
          contenedor.classList.add('no-menu');
          
     } else if(claseMenu.contains('fa-arrow-alt-circle-right') ) {
         //1ro mostrar flechas y mostrar flechas
          flechaIzq.style.display = 'block';
          flechaDer.style.display = 'none';

          //hacer que al apretar me remueva el menu
          contenedor.classList.remove('no-menu');
     }
});

