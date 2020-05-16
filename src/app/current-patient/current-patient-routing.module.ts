import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentPatientComponent } from './components/current-patient.component';

const routes: Routes = [{ path: '', component: CurrentPatientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentPatientRoutingModule {}
