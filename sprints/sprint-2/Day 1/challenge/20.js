function throttle(fn, interval) {
    count = 0
    return function(){
        setTimeout(fn,interval+interval*count)
        count ++
    }
}

const log = throttle(() => console.log('Throttled!'), 500);
log();
log(); // Only one "Throttled!" should appear every 500ms