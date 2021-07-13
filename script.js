function abrirMenu(){
    const menu = document.querySelector('.header-menu--menu');
    
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}

function checarScroll(){
    const botaosubir = document.querySelector('.botao-subir');
    if(window.scrollY > 300){
        botaosubir.style.display = 'flex'; 
    }else{
        botaosubir.style.display = 'none';
    }
}

function botaoSubir(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', checarScroll);