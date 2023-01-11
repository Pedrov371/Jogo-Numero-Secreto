const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * ( (maiorValor+1) - menorValor ) + menorValor)
}

console.log('numero secreto', numeroSecreto);

const elementoMenorValor = document.getElementById('menor_valor');
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior_valor');
elementoMaiorValor.innerHTML = maiorValor