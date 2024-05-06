
// Pega o tamanho da janela do browser e encapsula nas variaveis altura  e largura
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo () {

    altura = window.innerHeight //Pega o tamanho da altura da janela do browser
    largura = window.innerWidth //Pega o tamanho da largura da janela do browser

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


// Cria o mosquito aleatoriamente
function posicaoRandomica() {

    // O Math.random() gera um valor randomico e o Math.floor arredonda o valor para baixo para eliminar as casas decimais
    var posicaoX = Math.floor(Math.random() * largura) 
    var posicaoY = Math.floor(Math.random() * altura)

    console.log (posicaoX, posicaoY)

    // Criar elemento html 

    // O document.creteElement() cria um elemento html no DOM
    var mosquito = document.createElement('img')

    //mosquito.src indica onde buscar a imagem
    mosquito.src = './imagens/mosca.png'

    //document.body.appendChild cria um elemento filho dentro do body pelo DOM
    document.body.appendChild(mosquito)

}

