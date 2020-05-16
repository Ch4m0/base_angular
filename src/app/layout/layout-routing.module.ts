import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'paciente',
        loadChildren: () =>
          import('../current-patient/current-patient.module').then(
            m => m.CurrentPatientModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
