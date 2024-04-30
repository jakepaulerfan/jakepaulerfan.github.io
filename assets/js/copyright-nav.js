// -------------------------------------------------------------------- Navbar 

let burgerIcon = document.getElementById("nav-burger");
let closeIcon = document.getElementById("close-icon");
let navbar = document.getElementById("menu");
let navList = document.querySelectorAll('.list-item');

burgerIcon.addEventListener("click", toggleNavbar);
closeIcon.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    if (navbar.classList.contains("navbar-toggle")) {
        navbar.classList.remove("navbar-toggle");
    } else {
        navbar.classList.add("navbar-toggle");
    }
}

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();