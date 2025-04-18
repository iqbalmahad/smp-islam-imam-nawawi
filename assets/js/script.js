const iconToggle = document.querySelector(".icon-toggle input");
const nav = document.querySelector(".nav-device");
const menu = document.querySelector(".menu");
const sub = document.querySelectorAll(".sub");

iconToggle.addEventListener("click",function(){
  nav.classList.toggle("show");
});

sub.forEach(function(subButton){
  subButton.addEventListener("click",function(){
    console.log("Bismillah Submenu");
    const subMenu = this.nextElementSibling;
    if(subMenu){
      subMenu.classList.toggle("show");
    }

  });
});
