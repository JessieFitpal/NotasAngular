import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGuardarComponent } from './lista-guardar.component';

describe('ListaGuardarComponent', () => {
  let component: ListaGuardarComponent;
  let fixture: ComponentFixture<ListaGuardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGuardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
