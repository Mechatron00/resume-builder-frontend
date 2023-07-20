import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalskillsComponent } from './personalskills.component';

describe('PersonalskillsComponent', () => {
  let component: PersonalskillsComponent;
  let fixture: ComponentFixture<PersonalskillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalskillsComponent]
    });
    fixture = TestBed.createComponent(PersonalskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
