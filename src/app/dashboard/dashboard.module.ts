import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { ShowListPatientsComponent } from './pages/showListPatients/show-list-patients.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponent,
    ShowListPatientsComponent,
    TableComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, MatTableModule, MatIconModule, MatPaginatorModule],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule {}
