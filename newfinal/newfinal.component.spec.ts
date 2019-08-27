import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfinalComponent } from './newfinal.component';

describe('NewfinalComponent', () => {
  let component: NewfinalComponent;
  let fixture: ComponentFixture<NewfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
