// Closure é quando uma função "lembra"
// o escopo léxico. Mesmo que essa função seja executada em outro lugar

let x = 4;

function somarDobrarValor(a, b) {
    let x = 3
    const soma = a + b

    function dobrarValorDaSoma(value) {
        return 2 * value + x
    }
    return dobrarValorDaSoma(soma)


}





console.log(somarDobrarValor(2, 3))

