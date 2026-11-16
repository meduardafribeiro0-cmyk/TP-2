const estado = {
    lixeiraAberta: false,
    panoColetado: false,
    pegouChiclete: false,
}


let cenaAtual = 0;
const cenas = [
    {
        nome: 'ponto-de-onibus-1',
        fundo: 'imagens/imagemPonto.png',
        posicaoFundo: 'right center',
        setas: {
            direita: 1
        },
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
                        tipo: 'click',
                        acao: 'coletar',
                        conteudo: 'pano',
                        preCondicao: {
                            panoColetado: false
                        },
                        modificaEstado: {
                            panoColetado: true
                        }
                    },
                    {
                        tipo: 'click',
                        acao: 'modal',
                        conteudo: 'Lixeira vazia',
                        preCondicao: {
                            panoColetado: true
                        }
                    }
                ],
            }
        ]
    }, { //criei aqui apenas o interagivel da porta do cefet
        nome: 'porta-cefet',
        fundo: 'imagens/entrada-cefet.png',
        posicaoFundo: 'right center',
        setas: {
            esquerda: 0 //o valor deve ser a cena
        },
        interagiveis: [
            {
                nome: 'portaEntarda',
                imagem: 'imagens/porta-entrada.png',
                posicao: {
                    right: 354.7382,
                    height: 148.6265, //para calcular VALOR/escala
                    bottom: 262.100,
                    width: 241
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'mudarCena',
                        conteudo: 2
                    }
                ]
            }
        ]
    }, {
        nome: 'predioP1',
        fundo: 'imagens/corredor.jpeg',
        posicaoFundo: 'center center',
        setas: {
            esquerda: 1,
            direita: 3 //o valor deve ser a cena
        },
        interagiveis : [
            {
                nome: 'bala',
                imagem: 'imagens/chiclete',
                posicao: {
                    right: 'posiçao',
                    left: 'posiçao',
                    bottom: 'posiçao',
                    top: 'posiçao'
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'pegarChiclete',
                        conteudo: 'chiclete coletado'
                    }
                ]
            },{
                nome: 'bonecoEstatueta',
                imagem: 'imagens/boneco',
                posicao: {
                    right: 'posicao',
                    
                }
            }

        ]
    }, {
        nome: 'predioP12',
    }
]



