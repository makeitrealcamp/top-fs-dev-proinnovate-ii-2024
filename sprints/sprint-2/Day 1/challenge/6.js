const myModule = (function() {
    /* Public variables */
    let name = 'Luis Lopez'
    /* Private variables */
    let password ='password'
    /* Private methods */
    function changePassword(value){
        password = value
    }
    /* Public methods */
    function updateProfile(nameValue,passwordValue,previousValue){
        name=nameValue
        if(password === previousValue) changePassword(passwordValue)    
    }
    return {
        publicMethod:()=>{
            /* Un modulo siempre devuelve un objeto */
            return {
                name,
                updateProfile,
            }
        }
    }

})();

console.log(myModule.publicMethod())

// Output:
// Public method
// Private method
// secret