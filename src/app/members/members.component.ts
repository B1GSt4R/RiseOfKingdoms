import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  data: TreeNode[] = [];

  constructor(private http:HttpClient, private route:ActivatedRoute) {}

  async ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get("id"));
    var res:any = await this.http.get('/assets/'+id+'.json').toPromise();
    this.data = res;
  }
}
