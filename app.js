//Evento 1

const selecJogos = document.getElementById("jogosDisp")

const frm = document.getElementById("formReview")

const buttonSubmit = document.getElementById("subButton")

const listaReviews = document.getElementById("listaReviews")

const totalRev = document.getElementById("totalReviews")

const apelidos = []
const notas = []
const reviews = []
const jogoAtual = [] 
let totalReviews = 0

buttonSubmit.addEventListener("click", (e) => {

    e.preventDefault()

    const apelido = frm.apelido.value
    const nota = Number(frm.nota.value)
    const review = frm.review.value
    const jogo = selecJogos.value

    apelidos.push(apelido)
    notas.push(nota)
    reviews.push(review)
    jogoAtual.push(jogo)

    let reviewCompleto = ""
    for (let i = 0; i < apelidos.length; i++) {
        reviewCompleto = reviewCompleto + "<li class='list-group-item'>" + "<h3 class='mw'>" + "Apelido: " + "</h3>" + "<p class='mw'>" + apelidos[i] + "</p>" +
            "<h3 class='mw'>" + "<h3 class='mw'>" + "Jogo:" + "</h3>" + "<p class='mw'>"+ jogoAtual[i] + "</p>" + "<h3 class='mw'>" + "Nota: " + "</h3>" + "<p class='mw'>" + notas[i] + "</p>" + "<h3 class='mw'>" + "Review: " + "</h3>" +
            "<p class='mw'>" + reviews[i] + "</p>" + "</li>"
    }

    totalReviews = apelidos.length

    listaReviews.innerHTML = reviewCompleto
    totalRev.innerHTML = "<h4>" + "Total de reviews: " + totalReviews + "</h4>"

    frm.apelido.value = ""
    frm.nota.value = null
    frm.review.value = ""

})
// Fim do evento 1

//Evento 2

//seletores para mudar os itens relacionados aos jogos

const capa = document.getElementById("fotoJogo")

const publicado = document.getElementById("publicado")

const desenvolvido = document.getElementById("desenvolvido")

const data = document.getElementById("data")

const descricao = document.getElementById("descricao")

//

selecJogos.addEventListener("change", () => {

    let selecionado = selecJogos.value

    if (selecionado == "Mad Max") {

        capa.src = "images/mad-max.jpg"
        publicado.innerText = "Warner Bros. Games"
        desenvolvido.innerText = "Avalanche Studios"
        data.innerText = "31/08/2015"
        descricao.innerText = "Torne-se Mad Max, um guerreiro solitário em um mundo selvagem pós-apocalíptico onde carros são a chave para a sobrevivência. Neste jogo de mundo aberto em terceira pessoa repleto de ação, você precisa lutar para sobreviver na Terra Desolada usando técnicas de combate a pé, ou no volante, contra gangues de bandidos ferozes. Um herói relutante com instinto de sobrevivência, não há nada que Max queira mais do que deixar a loucura para trás e encontrar um pouco de paz nas lendárias 'Planícies do Silêncio'. Os jogadores são desafiados com missões traiçoeiras à medida que saqueiam um mundo perigoso em busca de recursos para construir o veículo de combate definitivo."

    } else if (selecionado == "Dark Souls") {

        capa.src = "images/dark-souls.jpg"
        publicado.innerText = "NAMCO BANDAI Games America Inc."
        desenvolvido.innerText = "FromSoftware, Inc."
        data.innerText = "22/09/2011"
        descricao.innerText = "A versão Games on Demand oferece suporte para inglês, francês, espanhol.Dark Souls é um RPG de acção, assente num rico mundo de fantasia obscura. Exploração de masmorras bastante intensa, encontros com inimigos poderosos e inovadoras funcionalidades online fazem dele uma experiência única no universo dos RPGs. Dark Souls quebra barreiras com o seu mundo fluido e que encoraja a exploração e adopta uma experiência de jogo moldável ao jogador."

    } else if (selecionado == "Saints Row") {

        capa.src = "images/saints-row.jpg"
        publicado.innerText = "Deep Silver"
        desenvolvido.innerText = "Deep Silver Volition"
        data.innerText = "23/08/2022"
        descricao.innerText = " Neenah, Kevin e Eli apontam você como Chefe e formam os Saints para que, juntos, vocês encarem Los Panteros, os Idols e a Marshall enquanto erguem seu império e lutam pelo controle da cidade. No fundo, Saints Row é a história de uma startup, só acontece que o negócio dos Saints é o crime. Vivencie o maior e melhor playground já criado para a série Saints Row; o mundo vasto e singular de Santo Ileso é o plano de fundo de uma variedade indomável e memorável de bicos, esquemas criminosos e missões de tirar o fôlego em que você vai atirar, dirigir e planar de wingsuit até o topo. DESTAQUES ● Testemunhe a origem dos Saints – Jogue uma história original digna de um blockbuster de ação, repleta de criminalidade, cenas extraordinárias e surpresas características com uma boa dose de humor. ● Desbrave o Vibrante, Vertiginoso e Velho Oeste – Mergulhe em Santo Ileso, o maior e melhor playground já criado para a série Saints Row, composto de nove distritos únicos cercados pela vasta e majestosa beleza do deserto. ● Construa seu império do crime – Domine a cidade de bairro em bairro, confronte facções inimigas e aumente seu controle sobre as ruas com esquemas criminosos inteligentes."
    }
})
