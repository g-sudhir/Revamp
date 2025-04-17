var dynamicBtn = document.getElementById("dynamic-open");
var dynamicClose = document.getElementById("dynamic-close");
var Menu = document.getElementById("menu");

dynamicBtn.addEventListener("click",()=>{
    dynamicClose.classList.toggle("hidden");
    dynamicBtn.classList.toggle("hidden");
     Menu.classList.toggle("hidden");
});

dynamicClose.addEventListener("click",()=>{
    Menu.classList.toggle("hidden");
    dynamicClose.classList.toggle("hidden");
    dynamicBtn.classList.toggle("hidden");
})