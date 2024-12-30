import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioPage } from './inventario.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioPage, // Componente principal de la página de Inventario
    children: [
      {
        path: 'producto', // Ruta hija para Producto
        loadComponent: () =>
          import('./producto/producto.page').then((m) => m.ProductoPage),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
