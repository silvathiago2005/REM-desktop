import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocadorComponent } from './list-locador.component';

describe('ListLocadorComponent', () => {
  let component: ListLocadorComponent;
  let fixture: ComponentFixture<ListLocadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLocadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
