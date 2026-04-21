const realInput = document.getElementById('realInput')
const coinSelector = document.getElementById('coinSelector')
const resultCoin = document.getElementById('resultCoin')
const resultBox = document.getElementById('resultBox')

realInput.addEventListener('change', (ev) => {

    if (coinSelector.value != 'no-selection' && realInput.value != '') {
        const result = realInput.value * coinsRealValue[coinSelector.value]
        resultBox.value = result.toFixed(2)
    } else {
        resultBox.value = ''
    }

})

coinSelector.addEventListener('change', (ev) => {
    const hasCoinDefined = defineResultCoin()

    if (hasCoinDefined && realInput.value != '') {
        const result = realInput.value * coinsRealValue[coinSelector.value]
        resultBox.value = result.toFixed(2)
    } else {
        resultBox.value = ''
    }
})

function defineResultCoin () {
    const coinSelected = coinSymbols[coinSelector.value]
    let hasCoinDefined = false

    if (coinSelected) {
        resultCoin.innerHTML = coinSelected
        hasCoinDefined = true
    } else {
        resultCoin.innerHTML = '?'
    }

    return hasCoinDefined
}

const coinSymbols = {
    'dolar': '$',
    'euro': '€',
    'libra': '£',
    'iene': '¥'
}

const coinsRealValue = {
    'dolar': 0.20,
    'euro': 0.17,
    'libra': 0.15,
    'iene': 32.11
}