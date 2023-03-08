let imagenes = document.querySelectorAll('img');
let botones = document.querySelectorAll('button');

for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener('click', function(){
        imagenes[i].classList.toggle('oculto');
    })
}

for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', function(){
        this.classList.add('oculto');
    })
}