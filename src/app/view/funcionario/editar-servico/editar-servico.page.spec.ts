import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarServicoPage } from './editar-servico.page';

describe('EditarServicoPage', () => {
  let component: EditarServicoPage;
  let fixture: ComponentFixture<EditarServicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
