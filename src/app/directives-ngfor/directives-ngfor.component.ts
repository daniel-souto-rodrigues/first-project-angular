import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngfor',
  templateUrl: './directives-ngfor.component.html',
  styleUrls: ['./directives-ngfor.component.css']
})
export class DirectivesNgforComponent implements OnInit {

  cursos: string[] = ['Java', 'Angular', 'phonegap']

  constructor() { }

  ngOnInit(): void {
  }

}
