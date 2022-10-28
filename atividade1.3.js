/*3. Crie um algoritmo com dois vetores e os preencha com números inteiros e positivos, o usuário deve dizer quando não quer
mais inserir valores mas os vetores devem ter a mesma quantidade de números. Depois crie um terceiro vetor que irá receber 
apenas os números que estão em ambos os vetores anteriores ou forem ímpar.
Ex.: entrada - arrayA[2,3,4,8,1] arrayB[7,4,1,6,8]
saída - arrayC[3,4,8,1]*/


var arrayA = []
var arrayB = []
var arrayC = []
var indexC = 0
var continuar = "s"
var index = 0

while(continuar == "s"){
    arrayA[index] = parseInt(prompt("insira um numero no ArrayA"))
    arrayB[index] = parseInt(prompt("insira um numero no ArrayB"))
    index++
    continuar = prompt("Você deseja continuar a inserir valores? S OU N")
}
console.log(arrayA)
console.log(arrayB)

for(var index1 = 0; index1 < arrayA.length; index1++){
    if(arrayB[index1] % 2 != 0){
        arrayC[indexC] = arrayB[index1]
        indexC++
    }
    for(var index2 = 0; index2 < arrayA.length; index2++){
        if (arrayA[index1] == arrayB[index2] || arrayA[index1] % 2 != 0){
            arrayC[indexC] = arrayA[index1]
            index++
        } 
    }
}
console.log(arrayC)