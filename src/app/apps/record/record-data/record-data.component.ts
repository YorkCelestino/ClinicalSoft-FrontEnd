import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Diagnostico: string;
  Fecha: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {Fecha: '12/08/2019', Diagnostico: 'Gripe'},
  {Fecha: '13/08/2019', Diagnostico: 'Embarazo'},
  

];

@Component({
  selector: 'app-record-data',
  templateUrl: './record-data.component.html',
  styleUrls: ['./record-data.component.scss']
})
export class RecordDataComponent implements OnInit {
  displayedColumns: string[] = ['Fecha', 'Diagnostico'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}