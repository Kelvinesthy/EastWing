import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniContactUsComponent } from './mini-contact-us.component';

describe('MiniContactUsComponent', () => {
  let component: MiniContactUsComponent;
  let fixture: ComponentFixture<MiniContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
