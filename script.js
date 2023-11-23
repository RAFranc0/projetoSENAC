const listaDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28, 31, 32, 33, 34,
    35, 37, 38, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 51, 53, 54, 55, 61, 62,
    63, 64, 65, 66, 67, 68, 69, 71, 73,
    74, 75, 77, 79, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 91, 92, 93, 94, 95,
    96, 97, 98, 99];

/*  FUNCAO PAI  */
function validacao() {
    validarTamanho();
    validarSabor();
    validarNome();
    validarTelefone();
    validarCep();
}

/* FUNCOES FILHAS*/

function validarNome() {
    let nome = document.getElementById("nome");
    if (nome.value == "") {
        alert("Adicione um nome ao pedido, por gentileza!");
        nome.focus();
    }
}

function validarTelefone() {
    let telefone = document.getElementById("telefone");
    var dddTelefone = parseInt(telefone.value.substring(0, 2));

    if (!listaDDD.includes(dddTelefone)) {
        alert("DDD inválido. Preencha novamente, por gentileza.")
        telefone.focus();
    }
    else if (telefone.value.match(/\D/)) {
        alert("Telefone contem digitos não numéricos. Preencha novamente apenas com números, por gentileza.")
        telefone.focus();
    }
    else if (telefone.value.length > 11 || telefone.value.length < 10) {
        alert("O telefone deve conter entre 10 e 11 dígitos, incluindo o DDD. Digite novamente, por gentileza!")
        telefone.focus();
    }
}

function validarCep() {

    let cep = document.getElementById("cep");
    if (cep.value.length == "") {
        alert("Digite o cep do endereço de entrega, por gentileza");
        cep.focus();
    }
}

function validarSabor() {
    let sabores = document.getElementById("sabores");

    if (sabores.selectedIndex == 0) {
        alert("Selecione o sabor, por gentileza.");
        sabores.focus();
    }
}

function validarTamanho() {
    let tamanhos = document.getElementById("tamanhos");
    if (tamanhos.selectedIndex == 0) {
        alert("Selecione o tamanho, por gentileza.");
        tamanhos.focus();
    }
}

/**Carrossel */

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('img-anterior');
const btnNext = document.getElementById('img-seguinte');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
setInterval(nextSlider, 5000);