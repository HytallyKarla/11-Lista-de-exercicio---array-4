/*1. Crie um algoritmo onde você deve criar um array que receba 5 números positivos ou negativos, depois de popular esse 
array. você deve substituir os valores POSITIVOS por “true” e os NEGATIVOS por “false”.
Ex.: array[-3,5,-6,-8,2] -> array[false,true,false,false,true]]*/

var array = []

for (var index = 0; index < 5; index++){
    array[index] = parseInt(prompt("insira um numero positivo ou negativo"))
}
console.log(array)

for (var index = 0; index < 5; index++){
    if(array[index] >= 0){
        array[index] = true
    }else {
        array[index] = false
    }
}
console.log(array)