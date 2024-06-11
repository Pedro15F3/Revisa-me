import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoVeiculoPage } from './solicitacao-veiculo.page';

describe('SolicitacaoVeiculoPage', () => {
  let component: SolicitacaoVeiculoPage;
  let fixture: ComponentFixture<SolicitacaoVeiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitacaoVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
