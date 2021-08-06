// carne - 400g por pessoa,se + 6h - 650
// cerveja - 1200 ml por pessoa,se + 6h - 2000 ml
// bebidas - 1000 ml por pessoa,se + 6h - 1500 ml
// crianças valem 0,5

let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let duracao = document.getElementById("duracao");
let resultado = document.getElementById("result");

function calc(){
    let qntAdultos = adultos.value;
    let qntCriancas = criancas.value;
    let qntDuracao = duracao.value;

    let qntCarne = calcCarne(qntDuracao) * qntAdultos + (calcCarne(qntDuracao)/2 * qntCriancas);
    let qntCerveja = calcCerveja(qntDuracao) * qntAdultos;
    let qntBebida = calcBebida(qntDuracao) * qntAdultos + (calcBebida(qntDuracao)/2 * qntCriancas);

    resultado.innerHTML = `<p style="font-weight: bold;"> Você vai precisar de:</p>`;
    resultado.innerHTML += `<p><img src="./assets/carne.svg" alt="carne" style="height: 25px"> ${qntCarne/1000} Kg de carne </p>`;
    resultado.innerHTML += `<p><img src="./assets/cerveja.svg" alt="cerveja" style="height: 25px"> ${Math.ceil(qntCerveja/350)} Latas de cerveja</p>`;
    resultado.innerHTML += `<p><img src="./assets/refri.svg" alt="refri" style="height: 25px"> ${qntBebida/1000} L de bebida</p>`
}

function calcCarne(duracao){
    if (duracao >=6){
        return 650
    } else{
        return 400
    }
}

function calcCerveja(duracao){
    if (duracao >=6){
        return 2000
    } else{
        return 1200
    }
}

function calcBebida(duracao){
    if (duracao >=6){
        return 1500
    } else{
        return 1000
    }
}