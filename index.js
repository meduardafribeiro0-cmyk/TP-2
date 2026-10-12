function iniciarJogo() {
    telaInicial = document.querySelector('#tela-inicial');
    telaJogo = document.querySelector('#tela-jogo');

    telaInicial.style.opacity = '0';

    setTimeout(() => {

        telaInicial.classList.remove('ativa');
        telaInicial.classList.add('escondida');

        telaJogo.classList.remove('escondida');
        telaJogo.classList.add('ativa');
        telaJogo.style.opacity = '1';
    }, 500); 
}

let botaoJogarEl = document.querySelector('#jogar')

botaoJogarEl.addEventListener('click', () => {
    iniciarJogo();
})
