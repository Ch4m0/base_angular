import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { ShowListPatientsComponent } from './pages/showListPatients/show-list-patients.component';

import { TableComponent } from './components/table/table.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponent,
    ShowListPatientsComponent,
    TableComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule]
})
export class DashboardModule {}
