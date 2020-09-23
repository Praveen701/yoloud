import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isDisplay1 = false;
  toggleDisplay1(){
   this.isDisplay1 = !this.isDisplay1;
 }

  constructor() { }


  ngOnInit(): void {
      }

hide=true;
}
