

let x: number
x = 23
console.log(x)
// x = 'Pepe' -> Error de tipos

let user : {
  id: number | string,
  name: string,
  edad: number,
  isAlumno: boolean,
  aficiones: [],
  puestos: Array<string>,
  algo: any
}


/** Inferencia de tipos */
let y = 23
// y = 'Pepe'

let z
z = 23
z = 'Pepe'


class Persona {
  constructor(
    public nombre = '',
    public edad: number) { }
}

/** Tipado estructural o 'ducking typing' */
let p1: Persona
let p2: Persona
p1 = new Persona('Ernesto', 23)
p2 = {nombre: 'Pepeeee', edad: 23}

console.log(p1)
console.log(p2)