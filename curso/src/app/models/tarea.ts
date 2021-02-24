export class Tarea {
  // titulo: string

  constructor(
    public titulo: string = '',
    public responsable: string = 'Antonio',
    public isCompleted: boolean = false
  ) {
    // this.titulo = titulo
  }
}

/** Alternativa a una clase (no se pueden inicializar los atributos) */
// interface iTarea {
//   titulo: string
//   responsable: string
//   isCompleted: boolean
// }