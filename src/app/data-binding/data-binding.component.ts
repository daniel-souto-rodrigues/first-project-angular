import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {

  youtubeUrl: string = 'http://youtube.com.br'
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/id/1/400/200';

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }
  
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
