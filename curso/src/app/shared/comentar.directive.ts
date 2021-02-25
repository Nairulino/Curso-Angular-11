import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[indComentar]'
})
export class ComentarDirective {
  title: string
  @Input() indComentar: string

  
  constructor(private elem: ElementRef) { }

   ngOnInit(): void{
    console.log('Directiva comentar', this.indComentar)
    this.indComentar = this.indComentar ? this.indComentar : 'Comentario'
    this.elem.nativeElement.title = this.indComentar
   }

   @HostListener('click') onClick() {
     this.elem.nativeElement.title = 'Tema comprobado'
   }
}
