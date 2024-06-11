import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarClientePage } from './consultar-cliente.page';

describe('ConsultarClientePage', () => {
  let component: ConsultarClientePage;
  let fixture: ComponentFixture<ConsultarClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
