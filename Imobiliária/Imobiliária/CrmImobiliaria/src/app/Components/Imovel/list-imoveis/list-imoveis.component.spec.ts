import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImoveisComponent } from './list-imoveis.component';

describe('ListImoveisComponent', () => {
  let component: ListImoveisComponent;
  let fixture: ComponentFixture<ListImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListImoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
