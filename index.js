function iniciarJogo() {
    let telaInicialEl = document.querySelector('#tela-inicial');
    let telaJogoEl = document.querySelector('#tela-jogo');
    let caixinhaEl = document.querySelector('#caixa-obejto');

    setTimeout(() => {
        telaInicialEl.classList.remove('ativa');
        telaInicialEl.classList.add('escondida');

        telaJogoEl.classList.remove('escondida');
        telaJogoEl.classList.add('ativa');
        telaJogoEl.style.opacity = '1';
    }, 500); 
}

let botaoJogarEl = document.querySelector('#jogar')

botaoJogarEl.addEventListener('click', () => {
    iniciarJogo();
})
