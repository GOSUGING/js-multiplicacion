
const factorial = (numero) => {
    if(numero <= 1) return 1;
    return numero * factorial(numero - 1);
}


const generarTablasYFactoriales = (numero) => {
    console.log(`Tablas de multiplicar y factoriales hasta ${numero}:`);
    for (let i = 1; i <= numero; i++) {
        let tabla = `${i} * `;
        let factorialResult = factorial(i);
        for (let j = 1; j <= numero; j++) {
            tabla += `${j} = ${i * j}`;
            if (j < numero) tabla += ", ";
        }
        tabla += ` - Factorial: ${factorialResult}`;
        console.log(tabla);
    }
}


const numero = parseInt(prompt("Por favor, ingresa un número:"));


if (!isNaN(numero) && numero > 0) {
    generarTablasYFactoriales(numero);
} else {
    console.log("Por favor, ingresa un número válido mayor que 0.");
}


function solicitarNumero() {
    
    let numero = prompt("Por favor ingresa un número entre 1 y 20:");

    
    numero = parseInt(numero);

    
    if (numero >= 1 && numero <= 20) {
        
        alert("¡El número ingresado es válido!");
    } else {
        
        alert("Número fuera del rango.");
    }
}


solicitarNumero();

