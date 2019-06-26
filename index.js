const btn = document.querySelector(".btn");
const links = document.querySelector(".linkMenu");


btn.addEventListener("click",function(){
   
    btn.classList.toggle("changeBar");
    links.classList.toggle("linksOpen");
    

})


// for popup
const btnClose = document.querySelector(".btnClose");
const popBoxCentral = document.querySelector(".popBoxCentral");

const overlay = document.querySelectorAll(".overlay");


overlay.forEach(function(overlay){

overlay.addEventListener("click",function(){

   popBoxCentral.classList.add('newPopBoxCentral');
    
})


})

btnClose.addEventListener("click",function(){
    popBoxCentral.classList.remove('newPopBoxCentral');
    
})

