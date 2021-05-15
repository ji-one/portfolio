/* Navigation Bar*/
const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const menuList = document.querySelectorAll(".navbar_menu a");

for (const element of menuList) {
  element.addEventListener("click", () => {
    element.classList.add("clicked");
    for (const other of menuList) {
      if (other !== element) {
        other.classList.remove("clicked");
      }
    }
  });
}

/* Home Title */
const content = "I'm Jiwon!";
let index = 0;
const text = document.querySelector(".typed");
function typing() {
  text.textContent += content[index++];
  if (index > content.length) {
    text.textContent = "";
    index = 0;
  }
}
setInterval(typing, 300);
