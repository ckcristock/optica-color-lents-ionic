import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteContablePage } from './reporte-contable.page';

describe('ReporteContablePage', () => {
  let component: ReporteContablePage;
  let fixture: ComponentFixture<ReporteContablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteContablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
