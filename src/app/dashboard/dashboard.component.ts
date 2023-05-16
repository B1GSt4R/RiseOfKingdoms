import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    data: TreeNode[] = [
    {
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'Argentina',
                expanded: true,
                children: [
                    {
                        label: 'Argentina'
                    },
                    {
                        label: 'France'
                    }
                ]
            },
            {
                label: 'France',
                expanded: true,
                children: [
                    {
                        label: 'France'
                    },
                    {
                        label: 'Morocco'
                    }
                ]
            }
        ]
    }
];
}
