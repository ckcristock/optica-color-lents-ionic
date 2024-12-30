import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reporte-contable',
  templateUrl: './reporte-contable.page.html',
  styleUrls: ['./reporte-contable.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ReporteContablePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
