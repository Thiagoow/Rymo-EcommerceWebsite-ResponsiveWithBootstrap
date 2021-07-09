/* Mostra o valor da variável em reais pro usuário na DOM: */
let value = 38.0;
let price = value.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL"
});
/* --------Muda o preço do produto a partir da quantidade
definida pelo input number na DOM: */
let quantity = document.getElementById("productQuantity").value;
console.log(quantity);

/* --------Muda as imagens da galeria: */
let smallImg = document.getElementsByClassName("small-img");
function changeMainImg(source) {
  let mainImg = document.getElementById("mainImg");
  mainImg.src = source.src;
}
