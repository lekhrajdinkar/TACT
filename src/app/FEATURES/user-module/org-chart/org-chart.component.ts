import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { data } from './data';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  constructor(private data : TreeNode[]) { }

  ngOnInit() {
    this.data = data ; 
  }

}
