import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresosPage } from './ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: IngresosPage, // Componente principal de la página de Ingresos
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosRoutingModule {}
