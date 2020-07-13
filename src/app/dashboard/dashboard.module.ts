import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { ShowListPatientsComponent } from './pages/showListPatients/show-list-patients.component';
import { TableComponent } from './components/table/table.component';
import { CreatePatientsComponent } from './pages/create-patients/create-patients.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponent,
    ShowListPatientsComponent,
    TableComponent,
    CreatePatientsComponent,
    EditPatientComponent
  ],
    imports: [CommonModule, DashboardRoutingModule, FormsModule, MaterialModule,]
})
export class DashboardModule {}
