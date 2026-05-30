const array = [5, 1, 4, 2, 8]
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

console.log(bubble_sort(array))

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
console.log(insertion_sort(array))

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

            temp = array[i]
            array[i] = array[min]
            array[min]= temp
        }
    }

    return "Array ordenado: " + array
}

console.log(selection_sort(array))