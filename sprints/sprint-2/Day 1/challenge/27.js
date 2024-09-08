function flatten(arr) {
    /* Condicion de parada */
    if(arr.length===0){
        return []
    }
    if(arr[0].length>0 ){
        const sliced = arr[0].slice(1).concat(arr.slice(1))
        return [arr[0][0],...flatten(sliced)]
    }
    else{
        return [arr[0], ...flatten(arr.slice(1))]
    }
}

console.log(flatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2], [3, [4, [5]]]])); // Output: [1, 2, 3, 4, 5]