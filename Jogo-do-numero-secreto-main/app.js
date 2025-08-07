let listaDeNumeroSorteado = []
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMenssagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    let menssagemTentativas = `Você acertou o numero Secreto com ${tentativas} ${palavraTentativa}`; 
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('p', menssagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled'); 
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela ('p', `O numero secreto é maior que ${chute}`);
        }
         tentativas ++;
         limparCampo();  
    }
    
 }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumeroSorteado.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteado = []; 
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return (gerarNumeroAleatorio);
    } else {
        listaDeNumeroSorteado.push (numeroEscolhido); 
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio; 
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true); 
    
}






