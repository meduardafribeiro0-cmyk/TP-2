const estado = {
    lixeiraAberta: false,
    pegouPaninho: false,
}


const cenaAtual = 0;
const cenas = [
    {
        nome: 'ponto-de-onibus-1',
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
                eventos: [
                    {
                        tipo: 'hover',
                        acao: 'som',
                        conteudo: 'sons/somLixeira.mp3',
                        modificaEstado: {
                            lixeiraAberta: true
                        }
                    },
                    {
                        tipo: 'click',
                        acao: 'modal',
                        conteudo: 'Lixeira comum',
                        preCondicao: {
                            lixeiraAberta: true
                        }
                    },

                ],

            }
        ]
    }, {
        nome: 'porta-cefet',
        fundo: 'imagens/portaria',
        posicaofundo: 'center center',
        interagiveis: [

        ]
        
        

    }
]



