import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgclassComponent } from './directives-ngclass.component';

describe('DirectivesNgclassComponent', () => {
  let component: DirectivesNgclassComponent;
  let fixture: ComponentFixture<DirectivesNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesNgclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
