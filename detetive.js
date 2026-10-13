const cenaAtual = 0;
const cenas = [
    {
        nome: 'ponto-de-onibus-1',
        tipo: 'detetive',
        fundo: 'imagens/fotoPonto.jpeg',
        interagiveis: [
            {
                nome: 'lixeira',
                imagem: 'imagens/lixeira.png',
                posicao: {
                    right: 100,
                    bottom: 50
                },
                hover: {
                    acao: 'som',
                    arquivo: 'lixeira.mp3'
                },
                click: {
                    acao: 'modal',
                    conteudo: '<h2>Lixeira suspeita</h2><p>......</p>'
                }
            }
        ]
    }, {

    }
]



function carregaCena(cena) {
    // 1. muda o bg
    // 2. cria os elementso HTML para os interagiveis
    // 3. associa eventos js aos interagiveis
}


function executaAcao(tipo, acao) {
    switch (tipo) {
        case 'som':
            /// tocar o som
            break;
        case 'modal':
            // cria e mostra janelinham odal
            break;
    }
}