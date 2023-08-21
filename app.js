function openbox(id){
    display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}

function openburger(id){
    display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='flex';
    }else{
       document.getElementById(id).style.display='none';
    }
}

function openmobilebox(id){
    display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}

function fadeIn(el, speed){
    var step = 1/speed
    var interval = setInterval(function(){
        if (+el.style.opacity >= 1)
        clearInterval(interval);
        el.style.opacity = +div.style.opacity + step;
    }, speed / 1000);
}

var div = document.getElementById("box")
var button = document.getElementById("switch")

button.addEventListener('click', function(event){
    fadeIn(div, 300);
});



