import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  
  constructor(public dialog: MatDialog) {}

  help() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  
  ngOnInit(): void {
  }
  centered = true;
  color = "black";
}
export class DialogContentExampleDialog {}