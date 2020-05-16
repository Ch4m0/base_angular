import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentPatientRoutingModule } from './current-patient-routing.module';
import { CurrentPatientComponent } from './components/current-patient.component';

@NgModule({
  declarations: [CurrentPatientComponent],
  imports: [CommonModule, CurrentPatientRoutingModule]
})
export class CurrentPatientModule {}
