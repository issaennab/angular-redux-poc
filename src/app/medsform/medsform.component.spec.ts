import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsformComponent } from './medsform.component';

describe('MedsformComponent', () => {
  let component: MedsformComponent;
  let fixture: ComponentFixture<MedsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
