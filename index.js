function carregarCena(cena) {
    
    let cenaAtualObj = cenas[cena];
    let divFundo = document.querySelector('#tela-inicial');

    divFundo.style.backgroundImage = `url(${cenaAtualObj.fundo})`;

    const itensContainer = document.querySelector('#itens-container');
    itensContainer.innerHTML = '';

    cenaAtualObj.interagiveis.forEach(item =>{

        let divInteragiveis = document.createElement('div')

        divInteragiveis.style.marginLeft = `${item.posicao.right}px`
        divInteragiveis.style.marginBottom = `${item.posicao.bottom}px`
        
        divInteragiveis.style.backgroundImage = `url('${item.imagem}')`
        divInteragiveis.style.width = '100px';   
        divInteragiveis.style.height = `${item.posicao.heigth}px`;

        

        divFundo.appendChild(divInteragiveis);
    })
}

let botaoIniciaEl = document.querySelector('#jogar')

botaoIniciaEl.addEventListener('click', () => {
    let menuInicial = document.querySelector(".conteudo-menu");
    menuInicial.style.display = 'none';

    carregarCena(0);
})