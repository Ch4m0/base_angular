import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DashboardService } from '../../dashboard.service';
import { Patient } from './patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  patient: Patient;

  listAge: Array<number> = [...Array(200).keys()];

  listEps: Array<string> = [
    'EPS Sura',
    'Aliansalud',
    'Sanitas',
    'Compensar EPS',
    'Salud Total',
    'Nueva EPS',
    'Coomeva EPS',
    'Famisanar'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) {
    this.patient = new Patient();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.getPatient(id);
  }

  // Get patient
  public getPatient(idPatient: number): void {
    this.dashboardService.getPatient(idPatient).subscribe((data: Patient) => {
      this.patient = data;
    });
  }

  // Update Patient
  onSubmit(): void {
    this.dashboardService
      .updatePatient(this.patient.id, this.patient)
      .subscribe((res: any) => {
        this.router.navigate(['/lista-pacientes']);
      });
  }
}
