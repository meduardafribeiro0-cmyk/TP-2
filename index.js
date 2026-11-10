function carregarCena(cena) {
    
    let cenaAtualObj = cenas[cena];
    let divFundo = document.querySelector('#tela-jogo');

    divFundo.style.backgroundImage = `url(${cenaAtualObj.fundo})`;

    divFundo.querySelectorAll('.interagiveis').forEach(div => div.remove()); 

    let objetos = [];

    cenaAtualObj.interagiveis.forEach(item =>{

        let divInteragiveis = document.createElement('div')

        divInteragiveis.style.backgroundImage = `url('${item.imagem}')`
        divInteragiveis.style.backgroundSize = '100% 100%';
        divInteragiveis.style.position = 'absolute';
        divInteragiveis.style.backgroundRepeat = 'no-repeat';
        divInteragiveis.classList.add('interagiveis');

        divFundo.appendChild(divInteragiveis);

        objetos.push({ item, divInteragiveis });
    });
    
    //Ajusta o tamnho da imagem dependendo do tamanho da janela
    function ajustarCena() {

    let posicaoFundo = cenaAtualObj.posicaoFundo || 'center center';
    divFundo.style.backgroundPosition = posicaoFundo;

    let escala = Math.max(
        divFundo.clientWidth / 1672,
        divFundo.clientHeight / 941
    );

    let larguraFundo = 1672 * escala; //Vai ter que criar no vetor um valor para imagem futuramente :)
    let alturaFundo = 941 * escala;

    let excessoX = larguraFundo - divFundo.clientWidth;
    let excessoY = alturaFundo - divFundo.clientHeight;

    let corteX = excessoX / 2;
    let corteY = excessoY / 2;

    if (posicaoFundo.startsWith('right')) {
        corteX = 0;
    }
    else if (posicaoFundo.startsWith('left')) {
        corteX = excessoX;
    }

    if (posicaoFundo.endsWith('top')) {
        corteY = excessoY;
    }
    else if (posicaoFundo.endsWith('bottom')) {
        corteY = 0;
    }

    divFundo.style.backgroundSize = `${larguraFundo}px ${alturaFundo}px`;

    objetos.forEach(({ item, divInteragiveis }) => {

        divInteragiveis.style.right =
            `${item.posicao.right * escala - corteX}px`;

        divInteragiveis.style.bottom =
            `${item.posicao.bottom * escala - corteY}px`;

        divInteragiveis.style.width =
            `${item.posicao.width * escala}px`;

        divInteragiveis.style.height =
            `${item.posicao.height * escala}px`;
    });
}

    ajustarCena();

    window.onresize = ajustarCena;
}


let botaoIniciaEl = document.querySelector('#jogar')

//Inicia o jogo após do click do botão jogar
botaoIniciaEl.addEventListener('click', () => {
    let telaInicial = document.querySelector('#tela-inicial');
    let telaJogo = document.querySelector('#tela-jogo');

    telaInicial.classList.add('escondida');
    telaJogo.classList.remove('escondida');

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
        }, 2000);
}

//Faz com que apareça legenda em determinado interagivel ou algo
function mostrarLegenda(texto) {
    let legenda = document.querySelector("#legenda")

    legenda.innerText = texto;

    legenda.classList.remove('escondido');

    setTimeout(() => {
            transicaoCena.classList.add('escondida');
        }, 2000);
}