import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHobbiesComponent } from './add-hobbies.component';

describe('AddHobbiesComponent', () => {
  let component: AddHobbiesComponent;
  let fixture: ComponentFixture<AddHobbiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHobbiesComponent]
    });
    fixture = TestBed.createComponent(AddHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
