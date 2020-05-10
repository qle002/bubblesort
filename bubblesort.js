const bubbleSort = (arr) => {
    var swapped;
    do {
        swapped = false
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swapped = true
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    } while (swapped) {
        return arr
    }
};

const unsorted = [];

while (unsorted.length < 100) {
    let i = Math.floor(Math.random() * 100) + 1;
    if (unsorted.indexOf(i) === -1) {
        unsorted.push(i);
    }
}

console.log(unsorted);
const sorted = bubbleSort(unsorted);
console.log(sorted);

