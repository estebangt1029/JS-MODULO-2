const a=1
const b=2
function sumar(){
    let suma=a+b
    console.log(suma)
}sumar()

let number=+prompt("give me a number")
function multiplicar(number){
    for(let i=1; i<=9; i++){
        document.write(`${number}x${i}=${number*i}</br>`)
    } 
}
multiplicar(number)