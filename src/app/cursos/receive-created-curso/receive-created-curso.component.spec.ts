import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCreatedCursoComponent } from './receive-created-curso.component';

describe('ReceiveCreatedCursoComponent', () => {
  let component: ReceiveCreatedCursoComponent;
  let fixture: ComponentFixture<ReceiveCreatedCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveCreatedCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveCreatedCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
