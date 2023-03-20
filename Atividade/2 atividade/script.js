const btnConverter = document.getElementById('btnConverter')
btnConverter.addEventListener('click', ()=>{
//Criar referência nos elementos da página
let modelo = document.getElementById('modelo')
let preco = document.getElementById('preco')
let outModelo = document.getElementById('outModelo')
let outPreco = document.getElementById('outPreco')
let outDividido = document.getElementById('outDividido')

let veiculo = modelo.value
let valor = Number(preco.value)

let entrada = Math.floor(valor / 2)
let divisao = entrada / 12

outModelo.textContent = `Veículo: ${veiculo}\n`

outPreco.textContent = `Entrada de R$ ${entrada}`

outDividido.textContent = `12x ${divisao.toFixed(2)}`

})