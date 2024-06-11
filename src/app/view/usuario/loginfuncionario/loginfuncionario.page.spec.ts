import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginfuncionarioPage } from './loginfuncionario.page';

describe('LoginfuncionarioPage', () => {
  let component: LoginfuncionarioPage;
  let fixture: ComponentFixture<LoginfuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginfuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
