const estado = {
    lixeiraAberta: false,
    panoColetado: false,
    pegouChiclete: false,
    fiosConectados: false,
    luzP12: false
}


let cenaAtual = 0;
const cenas = [
    {
        nome: 'ponto-de-onibus-1',
        fundo: 'imagens/imagemPonto.png',
        largura: 1672,
        altura: 941,
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
                        imagem: 'imagens/paninho2.png',
                        conteudo: 'pano',
                        preCondicao: {
                            panoColetado: false
                        },
                        modificaEstado: {
                            panoColetado: true
                        },
                        frase: 'pano sujo'
                    },
                    {
                        tipo: 'click',
                        acao: 'modal',
                        conteudo: 'Lixeira vazia',
                        preCondicao: {
                            panoColetado: true
                        }
                    }
                ]
            }
        ]
    }, { //criei aqui apenas o interagivel da porta do cefet
        nome: 'porta-cefet',
        fundo: 'imagens/entrada-cefet.png',
        largura: 1672,
        altura: 941,
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
        nome: 'corredorP1',
        fundo: 'imagens/corredor-p1.png',
        largura: 1672,
        altura: 941,
        posicaoFundo: 'center center',

        setas: {
            esquerda: 1,
            direita: 4
        },

        interagiveis: [
            {
                nome: 'portaDireita',
                imagem: 'imagens/porta-direita-p1.png',
                posicao: {
                    right: 1183.56,
                    bottom: 22.88,
                    width: 276.65,
                    height: 921.08
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'mudarCena',
                        conteudo: 3
                    }
                ]
            },

            {
                nome: 'portaEsquerda',
                imagem: 'imagens/porta-esquerda-p1.png',
                posicao: {
                    right: 125.56,
                    bottom: -52.88,
                    width: 286.65,
                    height: 921.08
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'modal',
                        conteudo: 'A porta está trancada.'
                    }
                ]
            },

            {
                nome: 'lixeira',
                imagem: 'imagens/lixeira-p1.png',
                posicao: {
                    right: 1065,
                    bottom: 109,
                    width: 160,
                    height: 230
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'modal',
                        conteudo: 'Uma lixeira velha e empoeirada.'
                    }
                ]
            }
        ]
    }, {
        nome: 'predioP1',
        fundo: 'imagens/quadro-sala-predio1.jpeg',
        largura: 2670,
        altura: 1600,
        posicaoFundo: 'center center',
        setas: {
            direita: 2
        },
        interagiveis : [
            {
                nome: 'janela',
                imagem: 'imagens/janela.png',
                posicao: {
                    right: 240,
                    bottom: 135,
                    width: 170,
                    height: 320
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'abrirInterface',
                        conteudo: 'janela'
                    }
                ]
            }
        ]
    }, {
        nome: 'portaP12',
        fundo: 'imagens/laboratorio-porta-fechado.png',
        largura: 1672,
        altura: 941,
        posicaoFundo: 'center center',

        setas: {
            esquerda: 2
        },

        interagiveis: [
            {
                nome: 'bebedouro',
                imagem: 'imagens/bebedouro.png',
                posicao: {
                    right: 240,
                    bottom: 135,
                    width: 170,
                    height: 320
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'modal',
                        conteudo: 'Um bebedouro antigo.'
                    }
                ]
            },
            {
                nome: 'macaneta',
                imagem: 'imagens/macaneta.png',
                posicao: {
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0
                },
                eventos: [
                    {
                        tipo: 'click',
                        acao: 'abrirInterface',
                        conteudo: 'painel-senha'
                    }
                ]
            }
        ]
    }, {
        nome: 'predioP12',
        fundo: 'imagens/laboratorio-sem-luz.png',
        fundoAlternativo: 'imagens/laboratorio-com-luz.png',
        estadoFundo: 'luzP12',
        posicaoFundo: 'center center',
        setas: {
            esquerda: 2
        },
        interagiveis: [
            {
            nome: 'computador',
            imagem: 'imagens/computador.png',
            posicao: {
                right: 0,
                bottom: 0,
                width: 0,
                height: 0
            },
            eventos: [
                {
                    tipo: 'click',
                    acao: 'abrirInterface',
                    conteudo: 'painel-computador'
                }
            ]
        },{
            nome: 'escaninho',
            imagem: 'imagens/escaninho.png',
            posicao: {
                right: 0,
                bottom: 0,
                width: 0,
                height: 0
            },
            eventos: [
                {
                    tipo: 'click',
                    acao: 'modal',
                    conteudo: 'Um escaninho antigo.'
                }
            ]
        }, {
            nome: 'armario',
            imagem: 'imagens/armario.png',
            posicao: {
                right: 0,
                bottom: 0,
                width: 0,
                height: 0
            },
            eventos: [
                {
                    tipo: 'click',
                    acao: 'modal',
                    conteudo: 'Um armário fechado.'
                }
            ]
        }, {
            nome: 'circuitoEletrico',
            imagem: 'imagens/circuito-eletrico.png',
            posicao: {
                right: 0,
                bottom: 0,
                width: 0,
                height: 0
            },
            eventos: [
                {
                    tipo: 'click',
                    acao: 'modal',
                    conteudo: 'Um circuito elétrico antigo.'
                }
            ]
        }, {
            nome: 'quadroEletrico',
            imagem: 'imagens/quadro-eletrico.png',
            posicao: {
                right: 200,
                bottom: 150,
                width: 250,
                height: 300
            },
            eventos: [
                {
                    tipo: 'click',
                    acao: 'abrirInterface',
                    conteudo: 'painel-fios'
                }
            ]
        }, {
            nome: 'interruptor',
            imagem: 'imagens/interruptor.png',
            posicao: {
                right: 500,
                bottom: 250,
                width: 60,
                height: 80
            },
            eventos: [
                {
                    tipo: 'click',
                    acao: 'modal',
                    conteudo: 'A energia está desligada.',
                    preCondicao: {
                        fiosConectados: false
                    }
                },
                {
                    tipo: 'click',
                    acao: 'atualizarCena',
                    preCondicao: {
                        fiosConectados: true,
                        luzP12: false
                    },
                    modificaEstado: {
                        luzP12: true
                    }
                },
                {
                    tipo: 'click',
                    acao: 'atualizarCena',
                    preCondicao: {
                        fiosConectados: true,
                        luzP12: true
                    },
                    modificaEstado: {
                        luzP12: false
                    }
                }
            ]
        }
    ]
}
];
