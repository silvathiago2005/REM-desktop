import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocadorComponent } from './show-locador.component';

describe('ShowLocadorComponent', () => {
  let component: ShowLocadorComponent;
  let fixture: ComponentFixture<ShowLocadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLocadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
