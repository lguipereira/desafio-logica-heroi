 let nivel
 let calculo = calcular(27,6)

function calcular (vitoria, derrota){
  let saldo = vitoria - derrota
  return saldo
}
if (calculo < 10){
  nivel = "Ferro"
}
else if (calculo> 11 && calculo <= 20){
  nivel = "Bronze"
}
else if (calculo>= 21 && calculo <= 50){
  nivel = "Prata"  
}
else if (calculo>= 51 && calculo <= 80){
  nivel = "Ouro"
}
else if (calculo>= 81 && calculo <= 90){
  nivel = "Diamante"
}
else if (calculo>= 91 && calculo <= 100){
  nivel = "Lendário"
}
else {
  nivel = "imortal"
}

console.log(`O Herói tem de saldo de ${calculo} e está no nível de ${nivel}`)