const estado = {
    lixeiraAberta: false,
    pegouPaninho: false,
    pegouChiclete: false,
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
                        tipo: 'click',
                        acao: 'abrirLixeira',
                        conteudo: 'pano coletado'
                    }
                ]
            }
        ]
    }, { //criei aqui apenas o interagivel da porta do cefet
        nome: 'porta-cefet',
        fundo: 'imagens/portaria',
        posicaofundo: 'center center',
        interagiveis: [
            {
                nome: 'portaEntarda',
                imagem: 'imagemPorta',
                posicao: {
                    right: 'posiçao',
                    left: 'posiçao',
                    bottom : 'posiçao',
                    top: 'posiçao'
                }
            }
        ]
    }, {
        nome: 'predioP1',
        fundo: 'imagens/fotodoP1',
        posicaoFundo: 'center center',
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
    }
]



