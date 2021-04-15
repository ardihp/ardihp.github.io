const text = document.querySelector(".con-left");
const chara = document.querySelector(".chara");
const down = document.querySelector(".ardi-down");
const hello = document.querySelector(".hello");
const curveatas = document.querySelector(".curve-atas");
const nav = document.querySelector("nav");

const tl = new TimelineMax();

tl.fromTo(text, 0.7, { x: "-50%" }, { x: "0%" })
.fromTo(nav, 1, { x: "30", opacity: "0"}, { x: "0", opacity: "1" }, "-=0.5")
.fromTo(chara, 1, { x: "75%" }, { x: "0%" }, "-=1")
.fromTo(down, 1, { y: "0%", opacity: "0" }, { y: "150%", opacity: "1" }, "-=0.5")
.fromTo(hello, 1, {opacity: "0"}, {opacity: "1"}, "-=0.8")
.fromTo(curveatas, 1, {y: "100%", opacity: "0"}, {y: "0", opacity: "1"}, "-=1.8")

window.addEventListener("scroll", function() {
    const nav= document.querySelector("nav");
    if(window.scrollY > 0){
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
});