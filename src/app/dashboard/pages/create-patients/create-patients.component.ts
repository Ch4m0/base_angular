import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Patient } from './patient';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.scss']
})
export class CreatePatientsComponent implements OnInit {

  public patient : Patient;
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

  constructor(private dashboard: DashboardService,private route: ActivatedRoute,
    private router: Router) {
    this.patient = new Patient();

   }

  ngOnInit(): void {
  }
  guardar(){

    var data = this.patient;
    const vm = this;
   this.dashboard.postPatients(data).subscribe({
    next(position) {
      vm.router.navigate(['/lista-pacientes']);
    },
    error(msg) {
      alert();
      console.log('Error Getting Location: ', msg);
    }
  }

   );
  }

}
