// main burger

let btn = document.querySelector('.bueger-menu');
let menu = document.querySelector('.m-burger');
let close = document.querySelector('#close');
btn.onclick = function(){
    menu.style.width = '300px';
}
close.onclick = function(){
    menu.style.width = '0px';
}