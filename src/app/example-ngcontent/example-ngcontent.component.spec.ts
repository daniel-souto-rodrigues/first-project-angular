import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgcontentComponent } from './example-ngcontent.component';

describe('ExampleNgcontentComponent', () => {
  let component: ExampleNgcontentComponent;
  let fixture: ComponentFixture<ExampleNgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
