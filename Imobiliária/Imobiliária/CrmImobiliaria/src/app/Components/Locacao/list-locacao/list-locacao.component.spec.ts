import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocacaoComponent } from './list-locacao.component';

describe('ListLocacaoComponent', () => {
  let component: ListLocacaoComponent;
  let fixture: ComponentFixture<ListLocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLocacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
