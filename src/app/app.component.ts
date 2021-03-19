import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { CustamComponent } from './custam/custam.component';
export interface Chipdata {
  Slot: string;
  time: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  constructor(public dialog: MatDialog) {}
  availabledata: Chipdata[] = [
      {Slot: 'Morning', time: '2:30'},
      {Slot: 'AfterNoon', time: '5:50'},
      {Slot: 'Evening', time: '5:25'}
    ];
    openDialog() {
      const dialogRef = this.dialog.open(CustamComponent, {
        width: '450px',
        height:'280px',
        panelClass: 'my-panel',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
}
