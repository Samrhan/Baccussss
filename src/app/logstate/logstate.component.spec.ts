import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogstateComponent } from './logstate.component';

describe('LogstateComponent', () => {
  let component: LogstateComponent;
  let fixture: ComponentFixture<LogstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
