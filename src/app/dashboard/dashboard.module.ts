import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { ShowListPatientsComponent } from './pages/showListPatients/show-list-patients.component';

import { TableComponent } from './components/table/table.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponent,
    ShowListPatientsComponent,
    TableComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, MatTableModule, MatIconModule]
})
export class DashboardModule {}
