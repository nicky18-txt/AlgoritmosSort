const array = [5, 1, 4, 2, 8]
function bubble_sort(array){
    let n = array.length;

    if (n <=1){
        return "Ya esta ordenado"
    }

    let swap;

    for (let i = 0; i < n; i++){
        swap = false
        for (let j = 0; j < n - 1 - i; j++){
            let temp = array[j]
            if (array[j] > array[j+1]){
                array[j] = array[j+1]
                array[j+1]=temp
                swap=true
            }
        }
        if (!swap){
            break;
        }
    }
    return "Array ordenado: " + array
}

console.log(bubble_sort(array))