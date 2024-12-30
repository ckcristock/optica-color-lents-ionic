import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaPage } from './venta.page';

const routes: Routes = [
  {
    path: '',
    component: VentaPage, // Componente principal de la página de Inventario
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaRoutingModule {}
