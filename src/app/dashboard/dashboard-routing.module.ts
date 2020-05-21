import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';

import { ShowListPatientsComponent } from './pages/showListPatients/show-list-patients.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'lista-pacientes',
    component: ShowListPatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
