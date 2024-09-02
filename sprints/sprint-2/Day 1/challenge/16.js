function withDelay(callback, delay) {
    setTimeout(callback,delay)
}

withDelay(() => console.log("This is delayed"), 1000); 