const btnConverter = document.getElementById('btnConverter')
    btnConverter.addEventListener('click', ()=>{
    //Criar referência nos elementos da página
    let inTitulo = document.getElementById('inTitulo')
    let inTempo = document.getElementById('inTempo')
    let outTitulo = document.getElementById('outTitulo')
    let outTempo = document.getElementById('outTempo')

    let titulo = inTitulo.value
    let duracao = Number(inTempo.value)
    
    let horas = Math.floor(duracao / 60)
    let minutos = duracao % 60

    outTitulo.textContent = ` ${titulo}` 
    outTempo.textContent = `${horas} horas(s) e ${minutos} minutos(s)`
})