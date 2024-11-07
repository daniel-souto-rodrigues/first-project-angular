import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: "O Senhor dos Anéis",
    rating: 4.54321,
    autor: "J.R.R. Tolkien",
    dataLancamento: new Date(1954, 5, 23),
    numeroPaginas: 1178,
    valor: 54.954,
    url: 'https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
