import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-alliances',
  templateUrl: './alliances.component.html',
  styleUrls: ['./alliances.component.scss'],
})
export class AlliancesComponent implements OnInit {
  data: TreeNode[] = [];

  constructor(private http:HttpClient, private route:ActivatedRoute) {}

  async ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get("id"));
    var res:any = await this.http.get('/assets/'+id+'.json').toPromise();
    this.data = res;
  }
}
