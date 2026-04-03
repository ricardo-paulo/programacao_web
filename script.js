const firstTerm = document.getElementById("first-term");
const secondTerm = document.getElementById("second-term");

const expressionRegex = /[0-9]/
let firstTermValid
let secondTermValid

firstTerm.addEventListener("change", () => {
    firstTermValid = expressionRegex.test(firstTerm.value);
});

secondTerm.addEventListener("change", () => {
    secondTermValid = expressionRegex.test(secondTerm.value);
})

function calc () {
    const selected = document.querySelector('input[name="operator"]:checked')
    const value1 = Number(firstTerm.value)
    const value2 = Number(secondTerm.value)

    if (!firstTermValid || !secondTermValid) {
        alert("Um ou mais valores é inválido!")

    }

    switch (selected.value) {
        case "some":
            alert("Resultado: " + (value1 + value2))
            break
        
        case "subtraction":
            alert("Resultado: " + (value1 - value2))
            break
        
        case "multiply":
            alert("Resultado: " + (value1 * value2))
            break

        case "divide":
            if (value2 == 0)
                alert("Não é possível fazer uma divisão por 0!")
            
            alert("Resultado: " + (value1 / value2))
            break
        
        default:
            alert("Operação inválida!")
            break
    }
}