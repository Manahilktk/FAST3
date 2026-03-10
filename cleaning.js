// button click effect

document.querySelector(".btn").addEventListener("click", () => {

    alert("Booking system coming soon!");
    
    });
    
    
    // simple scroll animation
    
    const cards = document.querySelectorAll(".card");
    
    window.addEventListener("scroll", () => {
    
    cards.forEach(card => {
    
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if(position < screenPosition){
    
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
    
    }
    
    });
    
    });

    // Smooth scrolling for navbar links

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {
    
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
    
    });
    
    });
    
    
    // Scroll Reveal Animation
    
    const revealElements = document.querySelectorAll(
    '.card, .about-box, .why-box'
    );
    
    const revealOnScroll = () => {
    
    revealElements.forEach((el) => {
    
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    
    if(elementTop < windowHeight - revealPoint){
    
    el.classList.add("active");
    
    }
    
    });
    
    };
    
    window.addEventListener("scroll", revealOnScroll);
    
    revealOnScroll();
    
    
    // Button ripple effect
    
    const btn = document.querySelector(".btn");
    
    btn.addEventListener("click", function(e){
    
    const circle = document.createElement("span");
    
    circle.classList.add("ripple");
    
    const rect = btn.getBoundingClientRect();
    
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";
    
    this.appendChild(circle);
    
    setTimeout(() => {
    circle.remove();
    },600);
    
    });