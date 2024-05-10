
// Pega o tamanho da janela do browser e encapsula nas variaveis altura  e largura
var altura = 0
var largura = 0
var vidas_perdidas = 1

function ajustaTamanhoPalcoJogo () {

    altura = window.innerHeight //Pega o tamanho da altura da janela do browser
    largura = window.innerWidth //Pega o tamanho da largura da janela do browser

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


// Cria o mosquito aleatoriamente
function posicaoRandomica() {
    // Remove o mosquito anterior (Caso exista), o document.getElementById('mosquito') verifica se existeo objeto com o id e se existir o document.getElementById('mosquito').remove() remove ele 
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
// document.getElementById recupela o elemento com o ID que estiver dentro dos ()
// e altera a imagem da vida caso ainda exista um mosquito vivo e adciona +1 na variavel vidas_perdidas
// O if verifica se a variavel vidas_perdidas valer mais que 3 ele retorna o Game Over
        if (vidas_perdidas > 3) {
            alert('Interromper o jogo (Game Over)')
        } else {
            document.getElementById ('v' + vidas_perdidas).src = "imagens/coracao_vazio.png"
            vidas_perdidas++
        }
    }
    
    // O Math.random() gera um valor randomico e o Math.floor arredonda o valor para baixo para eliminar as casas decimais
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura)  - 90
    

    // Cria um oiperador ternario (If) para verificar se a posição de X e Y é menor que 0, se for 
    // aplica o valor de zero a ela, se não continua o mesmo
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log (posicaoX, posicaoY)

    // Criar elemento html 

    // O document.creteElement() cria um elemento html no DOM
    var mosquito = document.createElement('img')

    //mosquito.src indica onde buscar a imagem
    mosquito.src = './imagens/mosca.png'
    //mosquito.className indica a classe do atributo
    mosquito.className = tamanhoAleatrorio() + ' ' + ladoAleatorio()
    // Abaixo adiciona atributos no compo bory do html
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    // This -> Seleciona o elemento que ele esta dentro, no caso a função posicaoRandomica
    // .remove() remove o elemento selecionado pelo this
    // onclick diz qua a função será executada no momento que houver um click do mouse no elemento
    mosquito.onclick = function () {
        this.remove()
    }

    //document.body.appendChild cria um elemento filho dentro do body pelo DOM
    document.body.appendChild(mosquito)



}

// Gera mosquito de tamanho aleatorio
function tamanhoAleatrorio() {
    var classe = Math.floor (Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

 // Gera o mosquito em lados aleatorios
function ladoAleatorio(){
    var lado = Math.floor (Math.random() * 2)
    
    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}



