function timeFunction(fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`Function took ${end - start}ms to execute.`);
}

timeFunction(() => {
    for (let i = 0; i < 1000000; i++) {} // Some computation
});