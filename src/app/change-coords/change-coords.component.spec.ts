import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCoordsComponent } from './change-coords.component';

describe('ChangeCoordsComponent', () => {
  let component: ChangeCoordsComponent;
  let fixture: ComponentFixture<ChangeCoordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCoordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
