import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngclass',
  templateUrl: './directives-ngclass.component.html',
  styleUrls: ['./directives-ngclass.component.css']
})
export class DirectivesNgclassComponent implements OnInit {
  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }

  meuFavorito: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
