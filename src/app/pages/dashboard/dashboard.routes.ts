import { Routes } from '@angular/router';

export const dashboardChildRoutes: Routes = [
  {
    path: 'clientes',
    loadComponent: () =>
      import('./pages/clientes/clientes.page').then((m) => m.ClientesPage),
  },
  {
    path: 'contabilidad',
    loadComponent: () =>
      import('./pages/contabilidad/contabilidad.page').then(
        (m) => m.ContabilidadPage
      ),
  },
  {
    path: 'inventario',
    loadComponent: () =>
      import('./pages/inventario/inventario.page').then(
        (m) => m.InventarioPage
      ),
  },
  {
    path: 'ventas',
    loadComponent: () =>
      import('./pages/ventas/ventas.page').then((m) => m.VentasPage),
  },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full', // Redirige a clientes por defecto
  },
];
