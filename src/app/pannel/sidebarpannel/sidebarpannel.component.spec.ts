import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarpannelComponent } from './sidebarpannel.component';

describe('SidebarpannelComponent', () => {
  let component: SidebarpannelComponent;
  let fixture: ComponentFixture<SidebarpannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarpannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
