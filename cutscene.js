const historiaCEFET = [
    {
        texto: "Eu estudava no CEFET. Meu pai chefiava um projeto de pesquisa ali, e eu passava tardes inteiras ao lado dele. Eu conhecia aqueles corredores de tanto esperar ele terminar. Sempre dizia que faltavam só mais cinco minutos.",
        fundo: "imagens/laboratorio-pai-filha.png" 
    },
    {
        texto: "Quando o meu pai desapareceu sem deixar pistas...As autoridades registraram o desaparecimento, mas logo encerraram as buscas. A diretoria também parou de falar sobre ele e o CEFET foi fechado e atualmente está abandonado. Falavam em acidente. Outros diziam que ele tinha ido embora por vontade própria. Eu só queria saber como podiam ter tanta certeza sem encontrá-lo.",
        fundo: "imagens/laboratorio-vazio.png" 
    },
    {
        texto: "Pouco depois, fui morar com minha tia no Rio. Achavam que ficar longe me ajudaria a recomeçar. Mas nunca deixei de esperar uma notícia.",
        fundo: "imagens/pao-de-acucar.png" 
    },
    {
        texto: "“Então, anos depois, encontrei um envelope na porta. Não tinha remetente.",
        fundo: "imagens/descoberta-envelope.png" 
    },
    {
        texto: "Abri sem imaginar o que encontraria. Mas além da carta havia outra coisa dentro do envelope. Meu dinossaurinho…",
        fundo: "imagens/carta-com-dinoussauro.png" 
    },
    {
        texto: "Eu tinha dado para ele naquele passeio. Ele estava com o chaveiro quando desapareceu.Pela primeira vez em anos, eu tinha uma pista que podia segurar nas mãos.",
        fundo: "imagens/presente-para-pai.png" 
    },
    {
        texto: "O sumiço do seu pai no CEFET foi uma farsa para acalmar a opinião pública. Ele não sofreu acidente nem abandonou você; seu desaparecimento envolve um projeto confidencial e interesses poderosos. A boa notícia é que ele aparentemente ainda está vivo, e talvez as respostas para sua dúvida esteja no CEFET...",
        fundo: "imagens/carta-aberta.png" 
    },
    {
        texto: "Então decidir seguir a carta. Passei a viagem lembrando dos laboratórios, das portas e dos caminhos que fazia com meu pai. Eu estava voltando para descobrir o que aconteceu com ele.",
        fundo: "imagens/viagem-belo-horizonte.png" 
    }
];

let numeroDaFala = 0;
let caixaHistoria = document.querySelector("#caixa-de-texto");
let textoNaTela = document.querySelector("#texto-aparece");
let setinha = document.querySelector("#seta-texto");
let divFundo = document.querySelector('#tela-jogo');
let relogioDaDigitacao;

//Carrega a cutscene e incia a história (foi dividida em varias funções)
function carregarHistoria() {
    if (numeroDaFala < historiaCEFET.length) {
        let dadosAtuais = historiaCEFET[numeroDaFala];
        
        divFundo.style.backgroundImage = `url(${dadosAtuais.fundo})`;
        divFundo.style.backgroundSize = 'cover';
    
        efeitoDigitar(dadosAtuais.texto);
    } else {
        fecharHistoriaEIrProJogo();
    }
}

//Faz com que apareça letra por letra
function efeitoDigitar(textoCompleto, letraAtual = 0) {
    setinha.style.display = 'none';
    if (letraAtual < textoCompleto.length) {
        textoNaTela.innerHTML = textoCompleto.substring(0, letraAtual + 1);
        relogioDaDigitacao = setTimeout(() => {
            efeitoDigitar(textoCompleto, letraAtual + 1);
        }, 40);
    } else {
        setinha.style.display = 'block';
    }
}

//Se clicar na caixa de texto ela termina de escrever tudo senão passa para outra 'cena'
caixaHistoria.addEventListener('click', () => {
    let textoCompletoAtual = historiaCEFET[numeroDaFala].texto;
    
    if (textoNaTela.innerHTML.length < textoCompletoAtual.length) {
        clearTimeout(relogioDaDigitacao);
        textoNaTela.innerHTML = textoCompletoAtual;
        setinha.style.display = 'block';
    } else {
        numeroDaFala++;
        carregarHistoria();
    }
});

//Fecha história e inicia o jogo 
function fecharHistoriaEIrProJogo() {
    setTimeout(() => {
        caixaHistoria.classList.add('escondida');
        divFundo.style.backgroundSize = ''; 

        transicaoDeCena();

        carregarCena(0);
        
        setTimeout(() => {
        inventario.style.display = 'flex';
        setTimeout(() => {
            inventario.style.opacity = '1';
        }, 50);
    }, 2000);
    }, 1000);
}