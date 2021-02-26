// Estas clases tienen dependencias entre ellas

class Mascota {
  constructor(public name: string){

  }
}

class Persona {
  constructor(public name: string, public mascota: Mascota = null) {
    
  }
}


const p1 = new Persona('Mariano', new Mascota('Sora'))