function carregarCena(cena) {
    console.log("A função foi chamada!");
    
    let cenaAtualObj = cenas[cena];
    let divFundo = document.querySelector('#tela-inicial');

    divFundo.style.backgroundImage = `url(${cenaAtualObj.fundo})`;
}

let botaoIniciaEl = document.querySelector('#jogar')

botaoIniciaEl.addEventListener('click', () => {
    let menuInicial = document.querySelector(".conteudo-menu");
    menuInicial.style.display = 'none';

    carregarCena(0);
})