const nav = document.querySelector("nav");
const left = document.querySelector(".product-left");
const shop = document.querySelector(".shop");
const caravan1 = document.querySelector(".caravan1");
const caravan2 = document.querySelector(".caravan2");

const tl = new TimelineMax();

tl.fromTo(left, 0.7, { x: "-50%" }, { x: "0" })
  .fromTo(nav, 1, { x: "30", opacity: "0" }, { x: "0", opacity: "1" }, "-=0.5")
  .fromTo(shop, 1, { x: "50%", opacity: "0" }, { x: "0", opacity: "1" }, "-=0.7")
  .fromTo(caravan1, 1, { opacity: "0" }, { opacity: "1" }, "-=0.5")
  .fromTo(caravan2, 1, { opacity: "0" }, { opacity: "1" }, "-=0.5");
