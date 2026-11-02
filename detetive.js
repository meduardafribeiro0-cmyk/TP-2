const cenaAtual = 0;
const cenas = [
    {
        nome: 'ponto-de-onibus-1',
        tipo: 'detetive',
        fundo: 'imagens/fotinha.jpeg',
        interagiveis: [
            {
                nome: 'lixeira',
                imagem: 'imagens/fotoLixeira.png',
                posicao: {
                    right: 100,
                    bottom: 50
                },
                hover: {
                    acao: 'som',
                    arquivo: 'sons/somLixeira.mp3'
                },
                click: {
                    acao: 'modal',
                    conteudo: '<h2>Lixeira suspeita</h2>'
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