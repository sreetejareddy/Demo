import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalUIComponent } from './final-ui.component';

describe('FinalUIComponent', () => {
  let component: FinalUIComponent;
  let fixture: ComponentFixture<FinalUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
