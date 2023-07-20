import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjectivesComponent } from './edit-objectives.component';

describe('EditObjectivesComponent', () => {
  let component: EditObjectivesComponent;
  let fixture: ComponentFixture<EditObjectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditObjectivesComponent]
    });
    fixture = TestBed.createComponent(EditObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
