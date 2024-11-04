import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCicloComponent } from './app-ciclo.component';

describe('AppCicloComponent', () => {
  let component: AppCicloComponent;
  let fixture: ComponentFixture<AppCicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCicloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
