let imageList = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
];
let bcImg = document.querySelectorAll(".item");

const big = document.querySelector(".largeImage");

function imageView() {
  for (let i = 0; i < imageList.length; i++) {
    bcImg[i].style.backgroundImage = `url(${imageList[i]})`;

    bcImg[i].addEventListener("click", function (e) {
      big.style.backgroundImage = `url(${imageList[e.target.innerHTML]})`;
    });
  }
}
imageView();
