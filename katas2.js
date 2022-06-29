// comece a criar a sua função add na linha abaixo
function add (num1, num2) {
    
    return num1 + num2
    
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (num1, num2) {
    let result = 0
    for(let i = 1; i <= num2; i++) {
        result = add(num1, result)
        
    }

    return result
    
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (x, n) {
    let result = 1
    for(let i = 1; i <= n; i++) {

        result = multiply(x, result)

    }

    return result
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial (num) {
    let result = num
    for(let i = 1; i < num; i++) {

        result = multiply(result, i)
        
    }

    return result
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci (n) {
    let result = 0
    let previousResult = 0
    let nextResult = 1
    for(let i = 0; i < n; i++) {
        
        result = add(previousResult, nextResult)
        previousResult = nextResult
        nextResult = result
        
    }
    
    return previousResult
    
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
