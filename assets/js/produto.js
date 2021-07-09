let smallImg = document.getElementsByClassName("small-img");

function changeMainImg(source) {
  let mainImg = document.getElementById("mainImg");
  mainImg.src = source.src;
}
