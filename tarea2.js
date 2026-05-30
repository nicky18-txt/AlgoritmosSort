const array = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * m * 10) + 1);
let m = 10
const a = array(m)

function bubble_sort(array) {
    let n = array.length;
    if (n <= 1) {
        return array
    }

    let swap;

    for (let i = 0; i < n; i++) {
        swap = false
        for (let j = 0; j < n - 1 - i; j++) {
            let temp = array[j]
            if (array[j] > array[j + 1]) {
                array[j] = array[j + 1]
                array[j + 1] = temp
                swap = true
            }
        }
        if (!swap) {
            break;
        }
    }
    return array
}

function insertion_sort(array) {
    let n = array.length
    if (n <= 1) {
        return array
    }

    for (let i = 1; i < n; i++) {
        const k = array[i]
        let j = i - 1

        while (j >= 0 && array[j] > k) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = k
    }
    return array
}

function selection_sort(array) {
    let n = array.length

    if (n <= 1) {
        return array
    }

    for (let i = 0; i < n; i++) {
        let min = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp

    }

    return array
}

function merge_sort(array) {
    let n = array.length
    if (n <= 1) {
        return array
    }

    let pares = []
    let impares = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            pares.push(array[i])
        } else {
            impares.push(array[i])
        }
    }

    pares = merge_sort(pares);
    impares = merge_sort(impares)

    return fusionar(pares, impares)
}

function fusionar(izq, der) {
    let resultado = []
    let i = 0
    let j = 0

    while (i < izq.length && j < der.length) {
        if (izq[i] <= der[j]) {
            resultado.push(izq[i]); i++
        } else {
            resultado.push(der[j]); j++
        }
    }
    while (i < izq.length) {
        resultado.push(izq[i]); i++
    }
    while (j < der.length) {
        resultado.push(der[j]); j++
    }
    // console.log(`  fusionando ${JSON.stringify(izq)} + ${JSON.stringify(der)} → ${JSON.stringify(resultado)}`)
    return resultado;
}

function quick_sort(array) {
    let n = array.length
    if (n <= 1) {
        return array
    }

    let indicePivote = Math.floor(Math.random() * array.length);
    let pivote = array[indicePivote];
    let menores = [];
    let iguales = [];
    let mayores = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivote) {
            menores.push(array[i])
        } else if (array[i] > pivote) {
            mayores.push(array[i])
        } else {
            iguales.push(array[i])
        }
    }
    // console.log(`  pivote ${pivote}: menores=${JSON.stringify(menores)} iguales=${JSON.stringify(iguales)} mayores=${JSON.stringify(mayores)}`)
    return [...quick_sort(menores), ...iguales, ...quick_sort(mayores)];
}

// console.log("Original:  ", a);
// console.log(bubble_sort([...a]));
// console.log(insertion_sort([...a]));
// console.log(selection_sort([...a]));
// console.log("Array ordenado: " + merge_sort([...a]));
// console.log("Array ordenado: " + quick_sort([...a]));

const rln = require("readline");

const rl = rln.createInterface({ input: process.stdin, output: process.stdout });

function algortimos(n) {
    const a = array(n)

    console.log("\n Original: ", n <= 20 ? a : "[" + a.slice(0, 5).join(", ") + " ... " + a.slice(-5).join(", ") + "]")
    console.log("-----------------------------------------------------------------")

    const algoritmos = [
        { nombre: "Bubble Sort", fn: () => bubble_sort([...a])},
        { nombre: "Insertion Sort", fn: () => insertion_sort([...a])},
        { nombre: "Selection Sort", fn: () => selection_sort([...a])},
        { nombre: "Merge Sort", fn: () => merge_sort([...a])},
        // { nombre: "Heap Sort",      fn: () => heap_sort([...a])},
        { nombre: "Quick Sort", fn: () => quick_sort([...a])},
    ]

    for (const algo of algoritmos) {
        const t1 = performance.now()
        const resultado = algo.fn()
        const ms = (performance.now() - t1).toFixed(4)

        const muestra = n <= 20
            ? "→ [" + resultado + "]"
            : "→ [" + resultado.slice(0, 3).join(", ") + " ... " + resultado.slice(-3).join(", ") + "]"

        console.log(` ${algo.nombre.padEnd(16)}  ${ms.padStart(10)} ms ${muestra}`)
    }
    console.log("-----------------------------------------------------------------")
}


function menu() {
    console.log("Análisis de Algoritmos de Sort - Nicole Altamirano")

    rl.question(" Ingresa el valor de n (0 para salir): ", (respuesta) => {
        const n = parseInt(respuesta)

        if (n === 0) {
            rl.close()
            return
        }

        if (isNaN(n) || n < 1) {
            console.log("Valor invalido, debe ingresar un numero mayor a 0")
            menu()
            return
        }

        algortimos(n)
        menu()
    })
}

menu()
