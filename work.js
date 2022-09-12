var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  }
});
let btn = document.getElementById("btn")
let btn_content = document.getElementById("menu")
let flag = false
btn.addEventListener("click", show)
btn_content.style.display = "none"
function show() {
  if (flag) {
      btn_content.style.display = "none"
      flag = false
  }
  else {
      btn_content.style.display = "block"
      flag = true
  }

}
let navlinks = document.getElementsByClassName("navlinks")

let check = document.getElementById("check")

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
        check.checked = false
    })
}