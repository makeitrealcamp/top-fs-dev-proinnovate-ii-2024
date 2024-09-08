number = parseInt(Math.random()*10)
guessed = parseInt(prompt("Escriba el numero a adivinar de 1 a 10"))

if (number === guessed){
    console.log("Felicitaciones, ese era!")
} 
else{
    console.log("Lo siento, intenta nuevamente!")
    console.log(`El numero era ${number}`)
}