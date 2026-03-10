// simple animation

const boxes = document.querySelectorAll(".info-box");

boxes.forEach(box => {

box.addEventListener("mouseenter", () => {
box.style.transform = "translateY(-5px)";
});

box.addEventListener("mouseleave", () => {
box.style.transform = "translateY(0)";
});

});