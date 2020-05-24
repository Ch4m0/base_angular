import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';

import { ShowListPatientsComponent } from './pages/showListPatients/show-list-patients.component';
import { CreatePatientsComponent } from './pages/create-patients/create-patients.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lista-pacientes', component: ShowListPatientsComponent },
  { path: 'crear-pacientes', component: CreatePatientsComponent },
  { path: 'editar-paciente/:id', component: EditPatientComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
