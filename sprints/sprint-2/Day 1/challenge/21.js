function customMap(arr, callback) {
    newArray =[]
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const newElement =callback(element)
        newArray.push(newElement)
        
    }
    return newArray
}

const numbers = [1, 2, 3];
const doubled = customMap(numbers, x => x * 2);
console.log(doubled); // Output: [2, 4, 6]