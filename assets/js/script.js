const cardImg = document.querySelector('.card-produto--img');
const btn360 = document.querySelector('.card-produto--btn360');
const cardProdutoId = document.querySelector('.card-produto--id');
const cardProdutoName = document.querySelector('.card-produto--name');
const cardProdutoValor = document.querySelector('.card-produto--valor');

import produtos from "./produtos.js";

let index = 0;

const textButton360 = '<i class="fi fi-sr-360-degrees">';
const textButton360close = '<i class="fi fi-sr-cross"></i>';

btn360.onclick = () => pushProdutos("view360")

const pushProdutos = (type) => {
    if (index + 1 === produtos.length || type === "push") {
        index = 0;
    }
    
    cardImg.src = produtos[index].produtoImg;
    cardProdutoId.innerHTML = "CÓDIGO: " + produtos[index].produtoId;
    cardProdutoName.innerHTML = produtos[index].produtoName;
    cardProdutoValor.innerHTML = "R$ " + produtos[index].produtoValo.toFixed(2);
    btn360.innerHTML = textButton360;
    
    if (type === "view360") {
        cardImg.src = produtos[index].produto360;
        btn360.innerHTML = textButton360close;
        btn360.onclick = () => pushProdutos("view360Close");
    }
    
    if (type === "view360Close") {
        btn360.onclick = () => pushProdutos("view360");
        btn360.innerHTML = textButton360;
    }
};


pushProdutos("push");