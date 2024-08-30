const formulario = document.querySelector('#formulario')
const valorInput = document.querySelector('#valor')
const servico = document.querySelector('#servico')
const resultado = document.querySelector('#resultado')

const calcularGorjeta = (valor, qualidade) => {
    let percentual

    switch (qualidade) {
        case 'bom':
            percentual = 0.15; 
            break
        case 'regular':
            percentual = 0.10; 
            break
        case 'ruim':
            percentual = 0.05; 
            break
        default:
            percentual = 0;
    }

    return valor * percentual
}

const exibirResultado = (valor, qualidade) => {
    const gorjeta = calcularGorjeta(valor, qualidade)
    resultado.textContent = `
    O total da sua refeição é: R$ ${(valor + gorjeta).toFixed(2)}
    e a gorjeta é: R$ ${gorjeta.toFixed(2)}
    `
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const valor = parseFloat(valorInput.value)
    const qualidade = servico.value
    
    exibirResultado(valor, qualidade)
});
