import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './app-ciclo.component.html',
})
export class AppCicloComponent implements OnInit, OnChanges,
  DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked,
  AfterViewInit, OnDestroy {

  @Input() valorInicial: number = 10;

  log(msg: string) {
    console.log(msg);
  }

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
}
