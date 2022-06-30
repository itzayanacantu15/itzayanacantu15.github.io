//obtener los elementos de la clase  .close
let link = document.querySelectorAll(".close");

//Recorrerlos 
link.forEach(function (link) {

    //Agregar un evento click a cada uno de ellos
    //case sensitive 
    link.addEvenListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animaciones que ya tiene 
        content.classList.remove(animate__pulse);
        content.classList.remove(animate__animated);

        //Agregar las clases de animaciones que ya tiene 
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function () {
            window.history.go(-1);
        }, 600);
        setInterval

        return false;
    });
});

