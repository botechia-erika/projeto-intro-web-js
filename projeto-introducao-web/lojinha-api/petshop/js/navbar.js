addEventListener('DOMContentLoaded', ()=>{
let  x = document.querySelector('#buttonMenu')
let y = document.querySelector('.menu__item')

x.addEventListener('click', ()=>{
if(y.style.display === "inline-block") {

  y.style.display = "none";
} else {
  y.style.display = "inline-block";
}
})
})