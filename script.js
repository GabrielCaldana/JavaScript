const botaoConverter = document.querySelector(".botao-converter")
const moedaSelect = document.querySelector(".moeda-select")

function converterValores(){
    const inputMoeda = document.querySelector(".input-moeda").value
    const valorRealDigitado = document.querySelector("#real-valor")
    const valorMoedaConvertida = document.querySelector("#moeda-convertida")

    console.log(moedaSelect.value)
    const valorDolar = 4.99
    const valorEuro = 5.36
    const valorLibra = 6.25
    const valorBitcoin = 235146.68
    

    

    if(moedaSelect.value == "dolar"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
           }).format(inputMoeda / valorDolar)
    }

    if(moedaSelect.value == "euro"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
            }).format(inputMoeda / valorEuro)
    }

    if(moedaSelect.value == "libra"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputMoeda / valorLibra)
    }

    if(moedaSelect.value == "bitcoin"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("es-US",{
            style: "currency",
            currency: "BTC"
        }).format(inputMoeda / valorBitcoin)
    }
    
    valorRealDigitado.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoeda)

   


} 

function trocaMoeda(){
   const moedaNome = document.querySelector("#moeda-nome")
   const imagemMoeda = document.querySelector(".imagem-moeda")

   if(moedaSelect.value == "dolar"){
    moedaNome.innerHTML = "Dólar"
    imagemMoeda.src = "./Assets/dolar.png"
   }
   
   if(moedaSelect.value == "euro"){
    moedaNome.innerHTML = "Euro"
    imagemMoeda.src = "./Assets/euro.png"
   }

   if(moedaSelect.value == "libra"){
    moedaNome.innerHTML = "Libra"
    imagemMoeda.src = "./Assets/libra.png"
   }

   if(moedaSelect.value == "bitcoin"){
    moedaNome.innerHTML = "Bitcoin"
    imagemMoeda.src = "./Assets/bitcoin.png"
   }

   converterValores()

}

moedaSelect.addEventListener("change", trocaMoeda)
botaoConverter.addEventListener("click", converterValores)

