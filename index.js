function carregarCena(cena) {
    
    let cenaAtualObj = cenas[cena];
    setaParaEsquerda.classList.add('escondida');
    setaParaDireita.classList.add('escondida');

if (cenaAtualObj.setas) {
    if (cenaAtualObj.setas.esquerda !== undefined) {
        setaParaEsquerda.classList.remove('escondida');
    }

    if (cenaAtualObj.setas.direita !== undefined) {
        setaParaDireita.classList.remove('escondida');
    }
}
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

        if (item.eventos) {
            divInteragiveis.addEventListener('click', () => {
                for (let evento of item.eventos) {
                    if (evento.tipo === 'click' && executaAcao(evento)) {
                        if(evento.acao == 'coletar'){ //cria uma imagem e coloca ela no slot do inventario
                            let coletavelEl = document.createElement('img')
                            coletavelEl.src = `${evento.imagem}`;

                            let slots = document.querySelectorAll('.slot');
                            for(let slot of slots){
                                if(slot.children.length === 0){
                                    slot.appendChild(coletavelEl);
                                    break;
                                }
                            }

                            coletavelEl.addEventListener('mouseenter', () => {
                                mostrarLegenda(evento.frase);
                            });
                        }
                        
                        break;
                    }
                }
        
            });

    divInteragiveis.addEventListener('mouseenter', () => {
        for (let evento of item.eventos) {
            if (evento.tipo === 'hover' && executaAcao(evento)) {
                break;
            }
        }
    });
}

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


let botaoIniciaEl = document.querySelector('#jogar');
let inventario = document.querySelector('#inventario');

//Inicia o jogo após do click do botão jogar
botaoIniciaEl.addEventListener('click', () => {
    let telaInicial = document.querySelector('#tela-inicial');
    let telaJogo = document.querySelector('#tela-jogo');

    telaInicial.classList.add('escondida');
    telaJogo.classList.remove('escondida');
    
    caixaHistoria.classList.remove('escondida');

    carregarHistoria();

});

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

    legenda.classList.remove('escondida');

    setTimeout(() => {
            legenda.classList.add('escondida');
        }, 1000);
}

let setaParaEsquerda = document.querySelector('#seta-esquerda');
let setaParaDireita = document.querySelector('#seta-direita');

setaParaEsquerda.addEventListener('click', () => {
    mudarCena('esquerda');
});

setaParaDireita.addEventListener('click', () => {
    mudarCena('direita');
});

function mudarCena(direcao) {
    let setas = cenas[cenaAtual].setas;

    if (!setas) {
        return;
    }

    let proximaCena = setas[direcao];

    if (proximaCena === undefined) {
        return;
    }

    irParaCena(proximaCena);
}

function irParaCena(destino) {
    cenaAtual = destino;

    carregarCena(destino);
}

//faz com que a açao nao execute duas vezes
function executaAcao(evento) {

    if (evento.preCondicao) {
        for (let chave in evento.preCondicao) {
            if (estado[chave] !== evento.preCondicao[chave]) {
                return false;
            }
        }
    }

    switch (evento.acao) {

        case 'modal':
            mostrarLegenda(evento.conteudo);
            break;

        case 'coletar':
            mostrarLegenda(evento.conteudo + ' coletado');
            break;

        case 'som':
            new Audio(evento.conteudo).play();
            break;
        
        case 'mudarCena':
            irParaCena(evento.conteudo);
            break;

        default:
            return false;
    }

    if (evento.modificaEstado) {
        for (let chave in evento.modificaEstado) {
            estado[chave] = evento.modificaEstado[chave];
        }
    }

    return true;
}

