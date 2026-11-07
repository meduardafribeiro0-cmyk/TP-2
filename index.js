function carregarCena(cena) {
    
    let cenaAtualObj = cenas[cena];
    let divFundo = document.querySelector('#tela-inicial');

    divFundo.style.backgroundImage = `url(${cenaAtualObj.fundo})`;

    const itensContainer = document.querySelector('#itens-container');
    itensContainer.innerHTML = '';

    divFundo.style.scale = 1;
    
    cenaAtualObj.interagiveis.forEach(item =>{

        let divInteragiveis = document.createElement('div')

        divInteragiveis.style.right= `${item.posicao.right}px`
        divInteragiveis.style.backgroundImage = `url('${item.imagem}')`
        divInteragiveis.style.width = '100px';
        divInteragiveis.style.backgroundSize = '100px';
        divInteragiveis.style.height = `${item.posicao.heigth}px`;
        divInteragiveis.style.position = 'absolute';
        divInteragiveis.style.backgroundRepeat = 'no-repeat';
        divInteragiveis.classList.add('interagiveis');
    
        

        divFundo.appendChild(divInteragiveis);
    })
}

let botaoIniciaEl = document.querySelector('#jogar')

botaoIniciaEl.addEventListener('click', () => {
    let menuInicial = document.querySelector(".conteudo-menu");
    menuInicial.style.display = 'none';

    transicaoDeCena();

    carregarCena(0);
})

let transicaoCena = document.querySelector("#transicao-cena");

//Faz com que antes de mudar de cena exista transição!
function transicaoDeCena() {
    transicaoCena.classList.remove('escondida');
    transicaoCena.style.opacity = '2';

    setTimeout(() => {
            transicaoCena.classList.add('escondida');
        }, 1000);
}

//Faz com que apareça legenda em determinado integravivel ou algo
function mostrarLegenda(texto) {
    let legenda = document.querySelector("#legenda")

    legenda.innerText = texto;

    legenda.classList.remove('escondido');

    setTimeout(() => {
            transicaoCena.classList.add('escondida');
        }, 2000);
}