import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  template: `
    <p>my-first-component works!</p>
    <app-cursos></app-cursos>
  `})
  
export class MyFirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
