const btnConverter = document.getElementById('btnConverter')
    btnConverter.addEventListener('click', ()=>{
    //Criar referência nos elementos da página
    let quilo = document.getElementById('quilo')
    let grama = document.getElementById('grama')
    let outRepost = document.getElementById('outRepost')
    

    let buffet = Number(quilo.value)
    let consumo = Number(grama.value)
    
    let valor = (buffet * consumo ) / 1000

    outRepost.textContent = `Valor a pagar: R$${valor}` 
})