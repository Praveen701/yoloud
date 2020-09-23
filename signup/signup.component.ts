import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  degrees:string[]=['B.tech','B.Arch','B.com','B.com(Hons.)','B.Des','BCA',
  'B.Pharm','BBA LLB(Hons.)','B.Sc','BA LLB(Hons.)'
];
departments:string[]=['Civil Engineering','Mechanical Engineering	',
	'Automobile Engineering',	'Aerospace Engineering',	
	'Polymer Engineering','Electrical & Electronics Engineering',	
	'Electronics & Communication Engineering','Electronics & Instrumentation Engineering'	,
	'Computer Science & Engineering',	'Information Technology',
	'Biotechnology'

]

 isDisplay = false;
 toggleDisplay(){
  this.isDisplay = !this.isDisplay;
}

constructor() {}
 


  ngOnInit(): void {
  }
hide=true;
hide1=true;
}
