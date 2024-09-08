const singleton = (function() {
    let instance= null // Objeto creado vacio
    /* El patron Singleton indica que creamos un metodo estatico que 
    verifique si existe una insrtancia y nos devuelva el mismo y en caso 
    no este creado lo creemos */
    function createInstance(){
        return {edad:29}
    }
    return {
        getInstance: ()=>{
            // Verificamos si existe la instancia
            if(!instance){
                instance=createInstance()
            }
            return instance
        }
    }
 })();

 const obj1 = singleton.getInstance();
 const obj2 = singleton.getInstance();
 console.log(obj1 === obj2); // Output: true