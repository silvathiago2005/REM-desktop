import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelRegisterComponent } from './imovel-register.component';

describe('ImovelRegisterComponent', () => {
  let component: ImovelRegisterComponent;
  let fixture: ComponentFixture<ImovelRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
