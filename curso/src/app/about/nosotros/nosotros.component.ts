import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  imagenes: Array<Object>
  constructor() { }

  ngOnInit(): void {
    this.imagenes = [944, 1011, 322].map((n) => {
      return {
        titulo: 'Imagen ' + n,
        texto: 'Texto demasiado largo para la imagen ' + n,
        imagen: `https://picsum.photos/id/${n}/900/500`
      }
    })
  }

}
