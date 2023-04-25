

let btnEncriptar = document.getElementById("btn-E");
let btnDesencriptar = document.getElementById("btn-D");
let btnCopy = document.getElementById("btn-C");
let info = document.querySelector(".info");
let textInput = document.getElementById("textareaInput");
let textOutput = document.getElementById("textareaOut");

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopy.addEventListener("click", copy);
textInput.addEventListener("input", activeInfo);

function encriptar() {
  let outputMSG = document.querySelector(".output-msg");
  let outText = document.querySelector(".output-text");
  
  let texto = textInput.value;
  let textoEncriptado = "";
  let arrayInt = [];
 
  if (texto !== "") {
    outputMSG.style.display = "none";
    outText.style.display = "block";
    for (let i in texto) {
      arrayInt[i] = texto.charCodeAt(i) + 4;
      textoEncriptado += String.fromCharCode(arrayInt[i]);
    }
    textOutput.innerText = `${textoEncriptado}`;
    textInput.value = "";
  } else {
    outputMSG.style.display = "block";
    outText.style.display = "none";
  }
}

/*Barchiller */
function desencriptar() {
  let outputMSG = document.querySelector(".output-msg");
  let outText = document.querySelector(".output-text");
  

  let texto = textInput.value;
  let textoEncriptado = "";
  let arrayInt = [];
 

  if (texto !== "") {
    outputMSG.style.display = "none";
    outText.style.display = "block";
    for (let i in texto) {
      arrayInt[i] = texto.charCodeAt(i) - 4;
      textoEncriptado += String.fromCharCode(arrayInt[i]);
    }
    textOutput.innerText = `${textoEncriptado}`;
    
  } else {
    outputMSG.style.display = "block";
    outText.style.display = "none";
  }
}

/*Copy*/
function copy() {
    textOutput.select();
    textOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
/*Enable info*/
function activeInfo() {
  info.style.display = "flex";
}

/*toggle*/
let btnToggle = document.getElementById("container-toggle");
let btnT = document.querySelector(".btn-toggle");
let mainOut = document.querySelector(".main-output");
let h2 = document.getElementById("h2-d");
let p = document.getElementById("p-d");
let infoText = document.getElementById("info-text-id");

btnToggle.addEventListener("click", ()=>{
  mainOut.classList.toggle("dark");
  textOutput.classList.toggle("dark");
  btnEncriptar.classList.toggle("dark");
  btnDesencriptar.classList.toggle("dk");
  btnCopy.classList.toggle("dk");
  h2.classList.toggle("dk");
  p.classList.toggle("dk");
  infoText.classList.toggle("dk");
  textInput.classList.toggle("dark");
  document.body.classList.toggle("dark");
  btnToggle.classList.toggle("active");
  btnT.classList.toggle("active");
  
  
});