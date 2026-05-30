const array = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * m * 10) + 1);
let m = 10
const a = array(m)

function bubble_sort(array) {
    let n = array.length;
    if (n <= 1) {
        return "Ya esta ordenado"
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
    return "Array ordenado: " + array
}

function insertion_sort(array) {
    let n = array.length
    if (n <= 1) {
        return "Ya esta ordenado el array"
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
    return "Array ordenado: " + array
}

function selection_sort(array) {
    let n = array.length

    if (n <= 1) {
        return "Ya esta ordenado"
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

    return "Array ordenado: " + array
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
        if(array[i] < pivote){
            menores.push(array[i])
        }else if(array[i] > pivote) {
            mayores.push(array[i])
        }else {
            iguales.push(array[i])
        }
    }
 
    return [...quick_sort(menores), ...iguales, ...quick_sort(mayores)];
}

console.log("Original:  ", a);
console.log(bubble_sort([...a]));
console.log(insertion_sort([...a]));
console.log(selection_sort([...a]));
console.log("Array ordenado: " + merge_sort([...a]));
console.log("Array ordenado: " + quick_sort([...a]));