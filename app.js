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
        descricao.innerText = "Torne-se Mad Max, um guerreiro solit??rio em um mundo selvagem p??s-apocal??ptico onde carros s??o a chave para a sobreviv??ncia. Neste jogo de mundo aberto em terceira pessoa repleto de a????o, voc?? precisa lutar para sobreviver na Terra Desolada usando t??cnicas de combate a p??, ou no volante, contra gangues de bandidos ferozes. Um her??i relutante com instinto de sobreviv??ncia, n??o h?? nada que Max queira mais do que deixar a loucura para tr??s e encontrar um pouco de paz nas lend??rias 'Plan??cies do Sil??ncio'. Os jogadores s??o desafiados com miss??es trai??oeiras ?? medida que saqueiam um mundo perigoso em busca de recursos para construir o ve??culo de combate definitivo."

    } else if (selecionado == "Dark Souls") {

        capa.src = "images/dark-souls.jpg"
        publicado.innerText = "NAMCO BANDAI Games America Inc."
        desenvolvido.innerText = "FromSoftware, Inc."
        data.innerText = "22/09/2011"
        descricao.innerText = "A vers??o Games on Demand oferece suporte para ingl??s, franc??s, espanhol.Dark Souls ?? um RPG de ac????o, assente num rico mundo de fantasia obscura. Explora????o de masmorras bastante intensa, encontros com inimigos poderosos e inovadoras funcionalidades online fazem dele uma experi??ncia ??nica no universo dos RPGs. Dark Souls quebra barreiras com o seu mundo fluido e que encoraja a explora????o e adopta uma experi??ncia de jogo mold??vel ao jogador."

    } else if (selecionado == "Saints Row") {

        capa.src = "images/saints-row.jpg"
        publicado.innerText = "Deep Silver"
        desenvolvido.innerText = "Deep Silver Volition"
        data.innerText = "23/08/2022"
        descricao.innerText = " Neenah, Kevin e Eli apontam voc?? como Chefe e formam os Saints para que, juntos, voc??s encarem Los Panteros, os Idols e a Marshall enquanto erguem seu imp??rio e lutam pelo controle da cidade. No fundo, Saints Row ?? a hist??ria de uma startup, s?? acontece que o neg??cio dos Saints ?? o crime. Vivencie o maior e melhor playground j?? criado para a s??rie Saints Row; o mundo vasto e singular de Santo Ileso ?? o plano de fundo de uma variedade indom??vel e memor??vel de bicos, esquemas criminosos e miss??es de tirar o f??lego em que voc?? vai atirar, dirigir e planar de wingsuit at?? o topo. DESTAQUES ??? Testemunhe a origem dos Saints ??? Jogue uma hist??ria original digna de um blockbuster de a????o, repleta de criminalidade, cenas extraordin??rias e surpresas caracter??sticas com uma boa dose de humor. ??? Desbrave o Vibrante, Vertiginoso e Velho Oeste ??? Mergulhe em Santo Ileso, o maior e melhor playground j?? criado para a s??rie Saints Row, composto de nove distritos ??nicos cercados pela vasta e majestosa beleza do deserto. ??? Construa seu imp??rio do crime ??? Domine a cidade de bairro em bairro, confronte fac????es inimigas e aumente seu controle sobre as ruas com esquemas criminosos inteligentes."
    }
})
