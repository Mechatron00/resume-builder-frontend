import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjectivesComponent } from './add-objectives.component';

describe('AddObjectivesComponent', () => {
  let component: AddObjectivesComponent;
  let fixture: ComponentFixture<AddObjectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddObjectivesComponent]
    });
    fixture = TestBed.createComponent(AddObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
