import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocatarioComponent } from './show-locatario.component';

describe('ShowLocatarioComponent', () => {
  let component: ShowLocatarioComponent;
  let fixture: ComponentFixture<ShowLocatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLocatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
