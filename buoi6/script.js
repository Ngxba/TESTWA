
let infoContainer = document.getElementById("infor-container");
let intro_block1 = document.getElementById("intro-block1");
let intro_block2 = document.getElementById("intro-block2");
let intro_block3 = document.getElementById("intro-block3");
// let intro_block4 = document.getElementById("intro-block4")

let intro_des1 = document.getElementById("intro-des1");
let intro_des2 = document.getElementById("intro-des2");
let intro_des3 = document.getElementById("intro-des3");
// let intro_des4 = document.getElementById("intro-des4")



function goToShop() {
  infoContainer.scrollIntoView({ behavior: "smooth" });
}

intro_block1.addEventListener("mouseover", function () {
  intro_block1.style.backgroundColor = "white";
  intro_block1.style.color = "black";
  intro_des1.className = "dp-block";
});

intro_block1.addEventListener("mouseleave", function () {
  intro_block1.style.backgroundColor = "";
  intro_block1.style.color = "white";
  intro_des1.className = "dp-none";
});

intro_block2.addEventListener("mouseover", function () {
  intro_block2.style.backgroundColor = "white";
  intro_block2.style.color = "black";
  intro_des2.className = "dp-block";
});

intro_block2.addEventListener("mouseleave", function () {
  intro_block2.style.backgroundColor = "";
  intro_block2.style.color = "white";
  intro_des2.className = "dp-none";
});

intro_block3.addEventListener("mouseover", function () {
  intro_block3.style.backgroundColor = "white";
  intro_block3.style.color = "black";
  intro_des3.className = "dp-block";
});

intro_block3.addEventListener("mouseleave", function () {
  intro_block3.style.backgroundColor = "";
  intro_block3.style.color = "white";
  intro_des3.className = "dp-none";
});
