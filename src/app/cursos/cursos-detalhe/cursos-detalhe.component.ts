import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe-component.html'
})
export class CursosDetalheComponent implements OnInit {

  id!: string;
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute) { 
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
