window.onscroll = function() {myFunction();};

var navbar = document.getElementById("navbar");
var main = document.getElementById("main");
var sticky = navbar.offsetTop;
var sticky1 = main.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky && window.pageYOffset >= sticky1) {
        navbar.classList.add("sticky");
        main.classList.add("sticky_main");
    } else {
        navbar.classList.remove("sticky");
        main.classList.remove("sticky_main");
    }
}