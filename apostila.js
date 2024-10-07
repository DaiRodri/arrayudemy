//let numeros = [1,2,3,4,5,6]
//let frutas = ["maça","banana","laranja"]
//console.log(numeros+frutas)
//let nomes = []
//nomes [1] = "joão" 
//nomes [0] = "maria"
//console.log(nomes)

//let cores = new Array ("verde","azul","rosa","preto","marron","branco")
//let arrayvazio = new Array (5)
//console.log(arrayvazio)
//console.log(cores[1])

//let matriz = [
    //[1,2,3],
    //[4,5,6],
    //[7,8,9]
//]
//console.log(matriz [1][2])
//console.log(numeros.length)

//let numeros = [0,1,2,3,4,5,6,7,8,9]
//numeros[numeros.length] =15

//numeros.unshift(11)
//numeros.splice(3,3)

//console.log(numeros)

//A//rray.prototype.insertFirstPosition = function(value){
    //for ( let i = this.length;i>=0;i--){
        //this[i] = this[i-1]
    //}
    //this[0]= value

//}
//numeros.insertFirstPosition(-1)
//console.log(numeros)

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`elemento na posição [${i}][${j}] = ${matriz[i][j]}`);
    }
}