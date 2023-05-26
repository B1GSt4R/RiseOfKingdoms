import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  constructor(private router:Router){}

  ngOnInit(): void {
  }

  onLogin(){
    if(this.username === "B1GSt4R" && this.password === "LITS0220!"){
      this.router.navigateByUrl("dashboard");
    }
  }

}
