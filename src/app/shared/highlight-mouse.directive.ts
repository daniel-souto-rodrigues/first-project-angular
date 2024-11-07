import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  //HostListener 
  @HostListener('mouseenter') onMouseOver() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'Yellow')
    this.backgroundColor = 'Yellow'
  }

  @HostListener('mouseleave') onMouseOut() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = 'White'
  }

  //HostBinding
  //@HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra caso necessário
    return this.backgroundColor;
  }
  private backgroundColor!: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

}
