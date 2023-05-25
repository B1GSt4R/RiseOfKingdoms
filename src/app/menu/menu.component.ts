import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title:string = "";
  user:string = "B1GSt4R";

  constructor(private router:Router){}

  ngOnInit(): void {
    this.title = this.router.url.slice(1,2).toUpperCase().concat(this.router.url.slice(2)).replace("/"," - ");
    document.title = "ROKM - " + this.title;
  }
}
