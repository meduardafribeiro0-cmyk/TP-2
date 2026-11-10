const cenaAtual = 0;
const cenas = [
    {
        nome: 'ponto-de-onibus-1',
        tipo: 'detetive',
        fundo: 'imagens/imagemPonto.png',
        posicaoFundo: 'right center',
        interagiveis: [
            {
                nome: 'lixeira',
                imagem: 'imagens/lixeira-ponto.png',
                posicao: {
                    right: 193.96,
                    height: 128.56, //para calcular VALOR/escala
                    bottom: 269.47,
                    width: 108.45
                },
                hover: {
                    acao: 'som',
                    arquivo: 'sons/somLixeira.mp3'
                },
                click: {
                    acao: 'modal',
                    conteudo: '<h2>Lixeira comum</h2>'
                }
            }
        ]
    }, {
        

    }
]




    





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