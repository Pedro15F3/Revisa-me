import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealizadosPage } from './realizados.page';

describe('RealizadosPage', () => {
  let component: RealizadosPage;
  let fixture: ComponentFixture<RealizadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RealizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
