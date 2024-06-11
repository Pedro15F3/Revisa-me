import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomefuncionarioPage } from './homefuncionario.page';

describe('HomefuncionarioPage', () => {
  let component: HomefuncionarioPage;
  let fixture: ComponentFixture<HomefuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomefuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
