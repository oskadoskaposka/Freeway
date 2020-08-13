// variaveis do fundo
let imagemDoFundo
let imagemDoAtor
let imagemDoAbelha
let imagemDoPitbull

// carregar as imagens
function preload (){
    imagemDoFundo = loadImage("imagens/estrada.png")
    imagemDoAtor = loadImage("imagens/dedelicia.png")
    imagemDoAbelha = loadImage("imagens/abelha.jpg")
    imagemDoPitbull = loadImage("imagens/pitbull.jpg")
  }

  // função para colocar as imagens no quadro
const criarImagem = (imagem, x, y, compr, altu) => {
    image(imagem, x, y, compr, altu)
    }

    