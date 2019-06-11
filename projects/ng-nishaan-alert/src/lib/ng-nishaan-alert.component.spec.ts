import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNishaanAlertComponent } from './ng-nishaan-alert.component';

describe('NgNishaanAlertComponent', () => {
  let component: NgNishaanAlertComponent;
  let fixture: ComponentFixture<NgNishaanAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNishaanAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNishaanAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
