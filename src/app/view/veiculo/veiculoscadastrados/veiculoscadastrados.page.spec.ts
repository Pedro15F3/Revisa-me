import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeiculoscadastradosPage } from './veiculoscadastrados.page';

describe('VeiculoscadastradosPage', () => {
  let component: VeiculoscadastradosPage;
  let fixture: ComponentFixture<VeiculoscadastradosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VeiculoscadastradosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
