// Botão Flutuante

const btnFlutuante = document.querySelector("#btn-flutuante");

console.log(btnFlutuante);

function alternarVisibilidade() {
  const pinBtn = document.querySelector(".pin-btn");
  pinBtn.classList.toggle("hidden");

  const cameraBtn = document.querySelector(".camera-btn");
  cameraBtn.classList.toggle("hidden");
}

function alterarBg() {
  const bg = document.querySelector(".bg");
  body.classList.toggle("bg-btn");
}

btnFlutuante.addEventListener("click", alternarVisibilidade);

btnFlutuante.addEventListener("click", alterarBg);
