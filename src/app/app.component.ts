import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ROKManager';
  sidebarVisible: boolean = false;
  // items: MenuItem[] = [];

  // home!: MenuItem;

  ngOnInit() {
    // this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

    // this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
