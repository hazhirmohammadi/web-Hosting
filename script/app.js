let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");

icon.addEventListener("click", function () {
    if (icon.classList.contains("fa-bars")) {
        menu.style.left = 0;
        icon.classList = "fa fa-times menu-icon";
    } else {
        menu.style.left = "-250px";
         icon.classList = "fa fa-bars menu-icon";
     }
})
//00000000000000000000000000000000000000000000
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:80,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            nav:true
        },

    }
})