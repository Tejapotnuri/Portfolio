let slider = document.getElementById("arrow");
let icons = document.getElementById("navicons");
let menu = document.getElementById('menu');
let navlink = document.querySelector(".nav-names2");
slider.value = -250;


slider.oninput=function(){
    icons.style.top = this.value+"px";
    if(slider.value == 0){
        slider.style.setProperty('--thumb-rotate', '90deg');
    }
    else if(slider.value == -250){
        slider.style.setProperty('--thumb-rotate', '270deg');
    }
}

function toggleMenu(){
    menu.classList.toggle('active');
    navlink.classList.toggle('active');
}
