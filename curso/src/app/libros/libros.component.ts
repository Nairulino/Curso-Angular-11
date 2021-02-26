import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-libros',
  template: `
    <div class='row'>
      <ind-mock class='col-6'></ind-mock>
      <ind-google class='col-6'></ind-google>
      <ind-byservice class='col-6'></ind-byservice>
    </div>
    <div class="row">
      <ind-from-api class='col-12'></ind-from-api>
    </div> 
  `,
  styles: [
  ]
})
export class LibrosComponent implements OnInit {

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
