const firstTerm = document.getElementById("first-term");
const secondTerm = document.getElementById("second-term");

const expressionRegex = /[0-9]/
let firstTermValid
let secondTermValid

firstTerm.addEventListener("change", () => {
    firstTermValid = expressionRegex.test(firstTerm.value);
    console.log(firstTermValid);
});

secondTerm.addEventListener("change", () => {
    secondTermValid = expressionRegex.test(secondTerm.value);
    console.log(secondTermValid)
})

function calc () {
    const selected = document.querySelector('input[name="operator"]:checked')
    const value1 = Number(firstTerm.value)
    const value2 = Number(secondTerm.value)

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
            alert("Resultado: " + (value1 / value2))
    }
}