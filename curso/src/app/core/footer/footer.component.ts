import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  autor: string
  fecha: Date
  constructor() { 
    this.autor = 'Antonio Albaladejo Romero'
    this.fecha = new Date()
  }

  ngOnInit(): void {
  }

}
