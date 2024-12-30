import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioRoutingModule } from '../inventario/inventario.route'; // Importar el routing de Inventario

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InventarioRoutingModule, // Incluir el módulo de rutas
  ],
})
export class InventarioModule {}
