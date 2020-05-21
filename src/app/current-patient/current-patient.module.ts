import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentPatientRoutingModule } from './current-patient-routing.module';
import { CurrentPatientComponent } from './components/current-patient.component';

import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [CurrentPatientComponent, IndexComponent],
  imports: [CommonModule, CurrentPatientRoutingModule]
})
export class CurrentPatientModule {}
