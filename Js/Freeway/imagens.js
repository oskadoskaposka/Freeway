// variaveis do fundo
let imagemDoFundo
let imagemDoAbelha
let imagemDoPitbull
let imagemDoMinhoca
let inimigos =[]

// carregar as imagens
function preload (){
    imagemDoFundo = loadImage("imagens/estrada.png")
    imagemDoAtor = loadImage("imagens/dedelicia.png")
    imagemDoAbelha= loadImage("imagens/abelha.jpg")
    imagemDoPitbull = loadImage("imagens/pitbull.jpg")
    imagemDoMinhoca = loadImage("imagens/minhoca.jpg")
    inimigos = [imagemDoAbelha, imagemDoPitbull, imagemDoMinhoca, 
                imagemDoPitbull, imagemDoMinhoca, imagemDoAbelha]
}

  // função para colocar as imagens no quadro
const criarImagem = (imagem, x, y, compr, altu) => {
    image(imagem, x, y, compr, altu)
}

  