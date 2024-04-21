import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocacaoComponent } from './show-locacao.component';

describe('ShowLocacaoComponent', () => {
  let component: ShowLocacaoComponent;
  let fixture: ComponentFixture<ShowLocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLocacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
