import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data = [
    {
      name: "Svanm",
      role: "High Council",
      rolepos: 1,
      color: "#FFAE00"
    },
    {
      name: "Orc",
      role: "High Council",
      rolepos: 1,
      color: "#FFAE00"
    },
    {
      name: "Grizzok",
      role: "Leadership",
      rolepos: 2,
      color: "#EEFF00"
    },
    {
      name: "Woody",
      role: "Leadership",
      rolepos: 2,
      color: "#EEFF00"
    },
    {
      name: "DavNow",
      role: "Leadership",
      rolepos: 2,
      color: "#EEFF00"
    },
    {
      name: "Thali",
      role: "Leadership",
      rolepos: 2,
      color: "#EEFF00"
    },
    {
      name: "Onion",
      role: "Offizier",
      rolepos: 3,
      color: "#006EFF"
    },
    {
      name: "Toxic",
      role: "Offizier",
      rolepos: 3,
      color: "#006EFF"
    },
    {
      name: "B1GSt4R",
      role: "Offizier",
      rolepos: 3,
      color: "#006EFF"
    },
    {
      name: "AiRMaN",
      role: "Offizier",
      rolepos: 3,
      color: "#006EFF"
    },
    {
      name: "Justa",
      role: "Offizier",
      rolepos: 3,
      color: "#006EFF"
    },
  ]

  ngOnInit(): void {
    this.data = this.data.sort((a,b) => a.rolepos - b.rolepos);
  }
}
