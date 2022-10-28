/*4. Faça um algoritmo que leia um array, e o preencha com números inteiros, se esse array tiver alguma posição com valor 
zero você deve eliminar essa posição. Para fazer isso, todos os elementos à frente do valor zero devem ser movidos uma 
posição para trás no vetor.
Ex.: entrada - array[2,6,8,0,6,4,3,2,0,7]
saída - array[2,6,8,6,4,3,2,7]*/

var array = []
var arraysuporte = []
var indexSup = 0

for (var index = 0; index < 5; index++){
    array[index] = parseInt(prompt("Insira um numero"))
}
console.log(array)

for(var index = 0; index < 5; index++){
    if (array[index] != 0){
        arraysuporte[indexSup] = array[index]
        indexSup++
    }
}
array = arraysuporte

console.log(array)
