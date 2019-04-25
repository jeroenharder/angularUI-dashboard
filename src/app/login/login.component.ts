import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
// import { TeamComponent } from '../team/team.component'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username:any;
  password:any;
  errorMessage:any = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitting(){
    this.errorMessage = '';
    if(this.username == 'admin@gmail.com' && this.password == 'admin'){
      this.router.navigate(['/team']);
    } else {
      // show error
      // this.router.navigate(['/team']);
      this.errorMessage = "error";
    }
  }

}
