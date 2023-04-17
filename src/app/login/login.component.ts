import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwort:string = "";
  wrong:boolean = false;

  constructor(private router:Router){

  }

  login(){
    if(this.passwort === "LITS0220!"){
      sessionStorage.setItem("LoggedIn", "TRUE");
      this.wrong = false;
      this.router.navigateByUrl("/ban");
    }else{
      this.wrong = true;
    }
  }
}
