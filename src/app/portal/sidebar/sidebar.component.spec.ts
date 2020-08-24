import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarportalComponent } from './sidebarportal.component';

describe('SidebarportalComponent', () => {
  let component: SidebarportalComponent;
  let fixture: ComponentFixture<SidebarportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
