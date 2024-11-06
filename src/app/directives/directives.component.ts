import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  
  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  cursos: string[] = ["Angular2"];

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
