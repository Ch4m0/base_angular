import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  carts1 = [
    {'number': 15 ,'descrition': 'ejemplo', 'class':'success'},
    {'number': 50 ,'descrition': 'ejemplo', 'class':'warning'},
    {'number': 80 ,'descrition': 'ejemplo', 'class':'primary'}
  ];

  carts2 = [
    {'number': 523 ,'title': 'ejemplo', 'class':'primary','codigo':'TV', 'icon':'glyphicon glyphicon-eye-open'},
    {'number': 81 ,'title': 'ejemplo', 'class':'danger','codigo':'TI', 'icon':''},
    {'number': 21 ,'title': 'ejemplo', 'class':'success','codigo':'OI', 'icon':''},
    {'number': 60 ,'title': 'ejemplo', 'class':'warning','codigo':'CI', 'icon':''}
  ];
  constructor() {

   }

  ngOnInit(): void {

  }


}
