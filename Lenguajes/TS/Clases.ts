export class Persona {
  // nombre: string
  // private edad: number
  // constructor(nombre = '', edad: number) {
  //   this.nombre = nombre
  //   this.edad = edad
  // }

  constructor(
    public nombre = '',
    private edad: number) { }


  saludar(alguien = 'amigo') {
    console.log(`Hola ${alguien} soy ${this.nombre} y tengo ${this.edad} años`)
  }
}

const p1 = new Persona('Pepe', 34)
const p2 = new Persona('Elena', 36)
p1.saludar(p2.nombre)
// p1.altura = 180 -> en typescript da error
console.log(p1)
console.log(p2)

interface Empresa {
  numContrato: number | string
}

export class Alumno extends Persona implements Empresa {
  curso: string
  numContrato: number | string
  constructor(nombre: string, edad: number, curso = 'Angular 11') {
    super(nombre, edad)
    this.curso = curso
  }
  saludar(alguien) {
    super.saludar(alguien)
    console.log(`Estudio ${this.curso}`)
  }
}

const a1 = new Alumno('Antonio', 26)
// a1.notas = {'Mates' : 1, 'Lengua' : 2} -> en typescript da error
a1.saludar(p1.nombre)
console.log(a1)