import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.css']
})
export class DirectiveNgstyleComponent implements OnInit {
  mudarAtivo() {
    this.ativo = !this.ativo;
  }

  ativo: boolean = false;
  tamanhoFonte: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
