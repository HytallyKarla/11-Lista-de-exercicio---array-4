/*2. Faça um algoritmo que peça para o usuário digitar 5 números e salve em um array, porém, se o usuário digitar um número
que já foi inserido, o seu programa deve pedir para ele digitar outro número.*/

var array = []
var numero = 0
var valido = false

for (var index = 0; index < 5; index++){
    valido = false 
    while (!valido){
        numero = parseInt(prompt("insira um numero"))
        valido = true

        for(var index2 = 0; index2 < 5; index2++){
            if (array[index2] == numero){
                valido = false
            }
        }
        if (valido) {
            array[index] = numero
        }else {
            console.log("numero inválido")
        }
    }
}
console.log(array)