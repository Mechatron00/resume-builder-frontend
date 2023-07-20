import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalskillsComponent } from './add-personalskills.component';

describe('AddPersonalskillsComponent', () => {
  let component: AddPersonalskillsComponent;
  let fixture: ComponentFixture<AddPersonalskillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPersonalskillsComponent]
    });
    fixture = TestBed.createComponent(AddPersonalskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
