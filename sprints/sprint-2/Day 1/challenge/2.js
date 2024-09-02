
const counter = (function(){
    let counterState =0
    return {
        /* Piden una funcion que permita incrementar */
        increment: ()=>{
            counterState++
        },
        getCount:()=> counterState // return inpmicito de counterState
    }

})()

counter.increment()
console.log(counter.getCount())