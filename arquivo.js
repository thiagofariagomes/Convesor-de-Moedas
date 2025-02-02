
const convertButton = document.querySelector(".convert-button")
const convertselect = document.querySelector(".coin-select")

function convertValues() {

    const inputCoinValue = document.querySelector (".input-values").value
    const CoinValueToConvert = document.querySelector (".coin-value-to-convert")
    const CoinValueConverted = document.querySelector (".coin-value")


    const dolarToday = 6
    const euroToday = 6.3
    const libraToday = 7.46
    const pesosArgentinosToday = 170.73


    if (convertselect.value == "dolar"){

        CoinValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format (inputCoinValue / dolarToday)

    }

    if (convertselect.value == "euro"){

        CoinValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR" 
        }).format (inputCoinValue / euroToday)

    }

    if (convertselect.value == "libra"){

        CoinValueConverted.innerHTML = new Intl.NumberFormat ("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format (inputCoinValue / libraToday)

    }

    if (convertselect.value == "pesos-argentinos"){

        CoinValueConverted.innerHTML = new Intl.NumberFormat ("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format (inputCoinValue * pesosArgentinosToday)

    }



    CoinValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format (inputCoinValue)



}

function changeCoin (){

    const coinName = document.getElementById ("coin-name")
    const coinImg = document.querySelector ("#coin-img")

    if (convertselect.value == "dolar"){

        coinName.innerHTML = "Dolar americano" 
        coinImg.src = "./assets/dolar.png"
    }

    if (convertselect.value == "euro"){

        coinName.innerHTML = "Euro" 
        coinImg.src = "./assets/euro.png"
    }

    if (convertselect.value == "libra"){

        coinName.innerHTML = "Libra"
        coinImg.src = "./assets/libra.png"
    }

    if (convertselect.value == "pesos-argentinos"){

        coinName.innerHTML = "Pesos Argentinos"
        coinImg.src = "./assets/argentina.png"
    }

    convertValues()
}


convertselect.addEventListener("change", changeCoin )
convertButton.addEventListener("click", convertValues)