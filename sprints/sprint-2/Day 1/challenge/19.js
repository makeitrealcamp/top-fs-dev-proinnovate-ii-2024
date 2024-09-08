function debounce(fn, delay) {
    let clicked= false
    function isClicked(){
        fn()
        clicked = false
    }
   return function(){   
     if(!clicked){
        clicked = true
        setTimeout(isClicked,delay)
     }
   }
}

const log = debounce(() => console.log('Debounced!'), 500);
log();
log();
log(); // Only one "Debounced!" should appear after 500ms