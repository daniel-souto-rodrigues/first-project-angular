import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[BackgroundYellow]'
})
export class BackgroundYellowDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { 
    console.log(this._elementRef)
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow' //evitar usar este por vulnerabilidades que gera
    this._renderer.setStyle(_elementRef.nativeElement, 'background-color', 'Yellow')
  }

}
