import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../../dashboard.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'sintomas',
    'edad',
    'eps',
    'accion'
  ];

  dataSource = new MatTableDataSource();

  constructor(private dashboard: DashboardService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.list()
  }

  list(){
    this.dataSource.paginator = this.paginator;
    this.dashboard.getPatients().subscribe((data: any[]) => {
      this.dataSource.data = data;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(data:number){
    var vm= this;
     this.dashboard.deletePatients(data).subscribe({
      next(position) {
        vm.list();
      },
      error(msg) {
        alert();
        console.log('Error Getting Location: ', msg);
      }
  });
}
}

export interface Patient {
  id: number;
  nombreCompleto: string;
  sintomas: string;
  edad: number;
  eps: string;
}
