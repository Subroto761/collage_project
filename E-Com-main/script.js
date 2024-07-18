

// const show = () => {
//   getControl.style.right = 0;
// };

// const getControl = document.getElementById("navbar");
// const control = getControl.addEventListener("click", show());

// show();

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}  

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
