import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRelatoriosComponent } from './main-relatorios.component';

describe('MainRelatoriosComponent', () => {
  let component: MainRelatoriosComponent;
  let fixture: ComponentFixture<MainRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRelatoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
