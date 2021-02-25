import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[indTruncar]'
})
export class TruncarDirective implements OnInit{
  inicial: string
  constructor(private el: ElementRef) { }
  @Input() indTruncar: number

  ngOnInit(): void{
    this.inicial = this.el.nativeElement.innerHTML
    if (this.inicial.length > this.indTruncar) {
      this.el.nativeElement.innerHTML = this.inicial.slice(0, this.indTruncar - 3) + '...'
      // this.el.nativeElement.innerHTML | truncar : 20
    }
  }

  @HostListener ('click') mostrar(): void{
    this.el.nativeElement.innerHTML = this.inicial
  }

}
