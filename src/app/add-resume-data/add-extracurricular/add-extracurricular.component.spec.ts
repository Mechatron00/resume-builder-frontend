import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtracurricularComponent } from './add-extracurricular.component';

describe('AddExtracurricularComponent', () => {
  let component: AddExtracurricularComponent;
  let fixture: ComponentFixture<AddExtracurricularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExtracurricularComponent]
    });
    fixture = TestBed.createComponent(AddExtracurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
