import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorformComponent } from './doctorform.component';

describe('DoctorformComponent', () => {
  let component: DoctorformComponent;
  let fixture: ComponentFixture<DoctorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
