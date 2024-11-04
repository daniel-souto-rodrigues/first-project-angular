import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {

  youtubeUrl: string = 'http://youtube.com.br'
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/id/1/400/200';
  
  getValor() {
    return 1;
  }

  getCurtiCurso(){
    return true;
  } 

  constructor() { }
  
  ngOnInit(): void {
  }

}
