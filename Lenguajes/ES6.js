let x = 21
const c = 12
// c = 21

const aDatos = [1,2,3]
aDatos.push(9)
console.log(aDatos)


function algo(a) {
  // cuerpo de la funcion
}

const suma = function (a = 0, b = 0) {
  return  a + b
}

console.log(suma(43,43))

// const resta = function (a = 0, b = 0) {
//   return  a - b
// }

const resta = (a = 0, b = 0) => a - b

const cuadrado = a => a*a

sumaM = (...aNumbers) => {
  // aNumbers = aNumbers.map(item => item*item)
  return aNumbers.reduce( (a,b) =>  a+b)
}

const sM = sumaM(1,2,3,4,5,6)

console.log(`
    El resultado de la suma masiva es: ${sM}`)