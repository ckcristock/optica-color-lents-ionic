import { Routes } from '@angular/router';

export const dashboardChildRoutes: Routes = [
  {
    path: 'clientes',
    loadComponent: () =>
      import('./clientes/clientes.page').then((m) => m.ClientesPage),
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
