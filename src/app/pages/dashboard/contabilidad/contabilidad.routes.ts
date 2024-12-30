import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContabilidadPage } from './contabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: ContabilidadPage, // Componente principal de la página de Contabilidad
    children: [
      {
        path: 'ingresos', // Ruta hija para Ingresos
        loadChildren: () =>
          import('./ingresos/ingresos.module').then((m) => m.IngresosModule),
      },
      {
        path: 'egresos', // Ruta hija para Egresos
        loadChildren: () =>
          import('./egresos/egresos.module').then((m) => m.EgresosModule),
      },
      {
        path: 'reporte-contable', // Ruta hija para Reporte Contable
        loadComponent: () =>
          import('./reporte-contable/reporte-contable.page').then(
            (m) => m.ReporteContablePage
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilidadRoutingModule {}
