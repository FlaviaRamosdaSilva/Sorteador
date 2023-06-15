

function generateNumber() {
const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)
const answer = document.querySelector(".result")
const disappear = document.querySelector(".text-add")

const result = Math.floor(Math.random() * (max - min + 1)) + min;
  
  answer.innerHTML = "Número Sorteado foi " + result;

  disappear.innerHTML = ""
}

function out() {
    location.reload();
}
