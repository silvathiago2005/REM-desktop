import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatarioRegisterComponent } from './locatario-register.component';

describe('LocatarioRegisterComponent', () => {
  let component: LocatarioRegisterComponent;
  let fixture: ComponentFixture<LocatarioRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocatarioRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatarioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
