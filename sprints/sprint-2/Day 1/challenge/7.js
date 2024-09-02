const lazyInit = (function() {
    let data = null
    function getData(){
        
        if (!data) data = ' Initializing...'
        
        else data = ' Already initialized'
        
        return data
    }
    return getData
 })();

 console.log(lazyInit()); // Output: Initializing...
 console.log(lazyInit()); // Output: Already initialized