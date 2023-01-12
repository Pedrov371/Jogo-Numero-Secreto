function verificaChuteValido (chute) {
    const numero = +chute;

    if (chuteValido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (chuteMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você Acertou!!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar_novamente" class="btn_jogar">Jogar novamente</button>
        `;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    }
}

function chuteValido (numero) {
    return Number.isNaN(numero)
}

function chuteMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar_novamente') {
        window.location.reload()
    }
})