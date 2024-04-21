import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocatarioComponent } from './list-locatario.component';

describe('ListLocatarioComponent', () => {
  let component: ListLocatarioComponent;
  let fixture: ComponentFixture<ListLocatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLocatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
