import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerwinComponent } from './kerwin.component';

describe('KerwinComponent', () => {
  let component: KerwinComponent;
  let fixture: ComponentFixture<KerwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
