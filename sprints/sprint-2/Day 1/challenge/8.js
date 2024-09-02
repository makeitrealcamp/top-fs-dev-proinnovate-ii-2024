const config = (function() {
    config_data={theme:'dark'}
    return {
        get:(key)=>{
            if(config_data[key]) return config_data[key]
        },
        set:(key,value)=>{
            if(config_data[key]) config_data[key] = value
        }
    }
})();

config.set('theme', 'dark');
console.log(config.get('theme')); // Output: dark