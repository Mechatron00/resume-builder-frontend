import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAwardsComponent } from './edit-awards.component';

describe('EditAwardsComponent', () => {
  let component: EditAwardsComponent;
  let fixture: ComponentFixture<EditAwardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAwardsComponent]
    });
    fixture = TestBed.createComponent(EditAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
