// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior:"smooth"
    });
    
    });
    
    });

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const dropdownParent = document.querySelector(".dropdown-parent");
    
    menuBtn.onclick = () => {
    navLinks.classList.toggle("active");
    };
    
    dropdownParent.onclick = () => {
    
    if(window.innerWidth <= 768){
    dropdownParent.classList.toggle("active");
    }
    
    };