const input = document.getElementById("qrcode");
const btn = document.getElementById("btn");
const img = document.getElementById("generation");
const qr = document.getElementById("qrcodeGenerated");
function genqr() {
  if (input.value.length > 0) {
    qr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    input.value = "";
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.add("error");
    }, 1000);
  }
}

btn.addEventListener("click", genqr);
