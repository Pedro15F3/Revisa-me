import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoServicoPage } from './solicitacao-servico.page';

describe('SolicitacaoServicoPage', () => {
  let component: SolicitacaoServicoPage;
  let fixture: ComponentFixture<SolicitacaoServicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitacaoServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
