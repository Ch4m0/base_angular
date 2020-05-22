import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.scss']
})
export class CreatePatientsComponent implements OnInit {

    id: number;
    nombre: string;
    apellido: string;
    sintomas: string;
    edad: number;
    eps: string;
   toppingList: string[] = ['Fiebre', 'dolor de cabeza', 'malestar general', 'nauceas', 'perdida de peso', 'sangrado'];
  constructor(private dashboard: DashboardService) { }

  ngOnInit(): void {
  }
  guardar(){
    var nombre= this.nombre+' '+this.apellido;
    var data = {
      'id' : this.id,
      'nombreCompleto': nombre,
      'sintomas': this.sintomas,
      'edad': this.edad,
      'eps': this.eps
    }
    console.log("sdsd");
   this.dashboard.postPatients(data).subscribe({
    next(position) {
      console.log('Current Position: ', position);
    },
    error(msg) {
      console.log('Error Getting Location: ', msg);
    }
  }

   );
  }

}
