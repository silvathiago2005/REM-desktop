import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadorRegisterComponent } from './locador-register.component';

describe('LocadorRegisterComponent', () => {
  let component: LocadorRegisterComponent;
  let fixture: ComponentFixture<LocadorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocadorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
