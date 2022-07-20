import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevovueloComponent } from './nuevovuelo.component';

describe('NuevovueloComponent', () => {
  let component: NuevovueloComponent;
  let fixture: ComponentFixture<NuevovueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevovueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevovueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
