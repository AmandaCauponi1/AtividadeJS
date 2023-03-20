const btnConverter = document.getElementById('btnConverter')
    btnConverter.addEventListener('click', ()=>{
    //Criar referência nos elementos da página
    let medicamento = document.getElementById('medicamento')
    let preco = document.getElementById('preco')
    let outMedicamento = document.getElementById('outMedicamento')
    let outPreco = document.getElementById('outPreco')
    

    let nome = medicamento.value
    let valor = Number(preco.value)
    
    let transformar = Math.floor(valor * 2)

    outMedicamento.textContent = `Promoção de ${nome}` 
    outPreco.textContent = `Leve 2 por apenas R$ ${transformar.toFixed(0)}` 
})