import { RouterModule, Routes } from '@angular/router';
import { ClientesPage } from './clientes/clientes.page';
import { NgModule } from '@angular/core';

const dashboardChildRoutes: Routes = [
  {
    path: 'clientes',
    loadChildren: () =>
      import('./clientes/clientes.module').then((m) => m.ClientesModule),
  },

  {
    path: 'contabilidad',
    loadComponent: () =>
      import('./contabilidad/contabilidad.page').then(
        (m) => m.ContabilidadPage
      ),
  },
  {
    path: 'inventario',
    loadComponent: () =>
      import('./inventario/inventario.page').then((m) => m.InventarioPage),
  },
  {
    path: 'venta',
    loadComponent: () => import('./venta/venta.page').then((m) => m.VentaPage),
  },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full', // Redirige a clientes por defecto
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardChildRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
