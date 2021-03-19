import { Component, OnInit } from '@angular/core';
export interface Chipdata {
  Slot: string;
  time: any;
}
@Component({
  selector: 'app-custam',
  templateUrl: './custam.component.html',
  styleUrls: ['./custam.component.scss']
})
export class CustamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  availabledata: Chipdata[] = [
    {Slot: 'Morning', time: '2:30'},
    {Slot: 'AfterNoon', time: '5:50'},
    {Slot: 'Evening', time: '5:25'}
  ];
}
