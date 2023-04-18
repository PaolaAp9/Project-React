import zelda from '../../assets/Jogos/zelda.png';
import mario from '../../assets/Jogos/mario.png';
import dragon from '../../assets/Jogos/dragon.png';
import minec from '../../assets/Jogos/minecraft.png';
import sims from '../../assets/Jogos/sims.png';
import roblox from '../../assets/Jogos/roblox.png';

const gerarEstrelasAleatorias = (min, max ) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const gerarPrecoAleatorias = (min, max ) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const jogos = {
    titulo: 'Jogos',
    lista: [
        {
            nome:'Zelda',
            imagem: zelda,
            preco: `R$${gerarPrecoAleatorias(399, 50)},00`,
            plataforma: "N64",
            estrelas: gerarEstrelasAleatorias(1 ,5),
            detalhes: [
                {
                    descricao: 'Zelda',
                    foto: zelda,
                    conteudo:'Este jogo do serviço Consola Virtual da Wii U é a versão europeia do jogo, otimizada originalmente pelo produtor, de forma a proporcionar jogabilidade e velocidade sonora semelhantes às da versão dos EUA. As demos e as animações podem ser executadas a velocidade PAL. A resolução de imagem foi aperfeiçoada para este lançamento.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)},00`,
                    console: "N64",
                }
            ]
            
        },
        {
            nome:'Super Mario',
            imagem: mario,
            preco: `R$${gerarPrecoAleatorias(399, 50)},00`,
            plataforma: 'Nintendo',
            estrelas: gerarEstrelasAleatorias(1, 5),
            detalhes: [
                {
                    descricao:'Super Mario',
                    foto: mario,
                    conteudo:'Super Mario Bros., o primeiro jogo de plataforma 2D de rolagem lateral a apresentar Mario, foi derivado da colaboração de Shigeru Miyamoto e Takashi Tezuka, ambos da Nintendo, como sucessor do jogo de arcade de 1983 Mario Bros., que estrelava dois personagens: Mario, o personagem principal que apareceu pela primeira vez em Donkey Kong',
                    valor: `R$${gerarPrecoAleatorias(399, 50)},00`,
                    console: 'Nintendo',
                }
            ]
        },
        {
            nome:'Dragon Ball',
            imagem: dragon,
            preco: `R$${gerarPrecoAleatorias(399, 50)},00`,
            plataforma:'Switch',
            estrelas: gerarEstrelasAleatorias(1, 5),
            detalhes: [
                {
                    descricao: 'Dragon Ball',
                    foto: dragon,
                    conteudo:'Use combos aéreos, cenários destrutíveis, cenas famosas do DRAGON BALL reproduzidas em 60 FPS e resolução 1080p (o Xbox One X suporta uma resolução mais alta). Detalhes do jogo Após o sucesso da série Xenoverse, chegou a hora de apresentar um novo jogo de luta clássico 2D do DRAGON BALL para esta geração de consoles.',
                    valor:  `R$${gerarPrecoAleatorias(399, 50)},00`,
                    console: 'Switch',
                }
            ]
        },
        {
            nome:'Minecraft',
            imagem: minec,
            preco: `R$${gerarPrecoAleatorias(399, 50)},00`,
            plataforma:'PlayStation 4',
            estrelas: gerarEstrelasAleatorias(1, 5),
            detalhes: [
                {
                    descricao:'Minecraft',
                    foto: minec,
                    conteudo:'Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco Markus "Notch" Persson e posteriormente desenvolvido e publicado pela Mojang Studios, cuja propriedade intelectual foi obtida pela Microsoft em 2014. Lançado inicialmente em maio de 2009 como um projeto em desenvolvimento, seu lançamento completo ocorreu em novembro de 2011 para Microsoft Windows, macOS e Linux, sendo posteriormente relançado para uma ampla variedade de plataformas. É o jogo eletrônico mais vendido de todos os tempos, vendendo mais de 238 milhões de cópias em todas as plataformas até abril de 2021, com mais de 140 milhões de jogadores ativos mensalmente.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)},00`,
                    console: 'PlayStation 4',
                }
            ]
        },
        {
            nome:'The Sims',
            imagem: sims,
            preco: `R$${gerarPrecoAleatorias(399, 50)},00`,
            plataforma:'Origin',
            estrelas: gerarEstrelasAleatorias(1, 5),
            detalhes: [
                {
                    descricao:'The Sims',
                    foto: sims,
                    conteudo:'The Sims é o primeiro jogo desta linha. Lançado em 04 de Fevereiro de 2000, The Sims usa uma combinação de técnicas gráficas em 3D e 2D. Os Sims são renderizados como objetos 3D, mas a casa e todos os seus objetos são pré-renderizados e são mostrados simetricamente. Em 2002 o jogo tornou-se o mais vendido jogo de computador de todos os tempos. Antes da Eletronic Arts',
                    valor: `R$${gerarPrecoAleatorias(399, 50)},00`,
                    console: 'Origin',
                }
            ]
        },
        {
            nome:'Roblox',
            imagem: roblox,
            preco: `R$${gerarPrecoAleatorias(399, 50)},00`,
            plataforma:'MMOSG e Sandbox',
            estrelas: gerarEstrelasAleatorias(1, 5),
            detalhes:[
                {
                    descricao: 'Roblox',
                    foto: roblox,
                    conteudo:'Roblox é uma plataforma de jogos MMOSG e Sandbox baseados normalmente em mundo aberto, multiplataforma e simulação que permite criar do zero seu próprio mundo virtual chamado de experiência ou place onde os milhares de jogadores da plataforma podem interagir sobre.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)},00`,
                    console:'MMOSG e Sandbox',
                }
            ]
        },
    ]
}
export default jogos;