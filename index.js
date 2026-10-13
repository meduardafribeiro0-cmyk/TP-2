function iniciarJogo() {
    let telaInicialEl = document.querySelector('#tela-inicial');
    let telaJogoEl = document.querySelector('#tela-jogo');
    telaInicialEl.classList.add('escondida');
    telaJogoEl.classList.remove('escondida');
}

let botaoJogarEl = document.querySelector('#jogar')

botaoJogarEl.addEventListener('click', () => {
    iniciarJogo();
});


