import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeiculoCaronaPage } from './veiculo-carona.page';

describe('VeiculoCaronaPage', () => {
  let component: VeiculoCaronaPage;
  let fixture: ComponentFixture<VeiculoCaronaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VeiculoCaronaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
