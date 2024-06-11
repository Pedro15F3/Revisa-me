import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncioUsuarioPage } from './funcio-usuario.page';

describe('FuncioUsuarioPage', () => {
  let component: FuncioUsuarioPage;
  let fixture: ComponentFixture<FuncioUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuncioUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
