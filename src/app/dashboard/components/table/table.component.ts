import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  nombreCompleto: string;
  sintomas: string;
  edad: number;
  eps: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    nombreCompleto: 'Abner Chamorro Diaz',
    sintomas: 'Esta mareado, vino borracho, tiene dolor de cabeza',
    edad: 27,
    eps: 'Sura'
  },
  {
    id: 2,
    nombreCompleto: 'Simon Castañeda Fierro',
    sintomas: 'Subión tensión, se cayo en la moto',
    edad: 29,
    eps: 'Medimas'
  }
];
