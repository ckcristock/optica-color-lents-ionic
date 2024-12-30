import { RouterModule, Routes } from '@angular/router';
import { ClientesPage } from './clientes.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage, // Componente principal
    children: [
      {
        path: ':id/cliente',
        loadComponent: () =>
          import('./cliente/cliente.page').then((m) => m.ClientePage),
      },
      {
        path: ':id/receta',
        loadComponent: () =>
          import('./receta/receta.page').then((m) => m.RecetaPage),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
