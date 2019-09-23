import { Component, OnInit } from '@angular/core';
import { SoftwareToolsListComponent} from './software-tools-list/software-tools-list.component';
import { SoftwareTileModel} from '../../models/software-tile.model';
import { SoftwareToolVersionModel } from '../../models/software-tool-version.model';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-software-tools',
  templateUrl: './software-tools.component.html',
  styleUrls: ['./software-tools.component.scss']
})
export class SoftwareToolsComponent implements OnInit {
  selectedTool: SoftwareTileModel;
  constructor() { }
  title = 'Tool Compliancy Metrics';
  PieChart = [];

  ngOnInit() {

    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Compliant', 'Not Compliant', 'In Process', 'Not Required', 'Backlog'],
        datasets: [{
          label: '# of Votes',
          data: [13, 0 , 2, 3, 2],
          backgroundColor: [
            'rgba(0, 192, 0, 1)',
            'rgba(240, 0, 0, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(160, 0, 255, 0.80)',
            'rgba(0, 69, 232, 0.76)'
          ],
          borderColor: [
            'rgba(0, 192, 0, 1)',
            'rgba(240, 0, 0, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(160, 0, 255, 0.80)',
            'rgba(0, 69, 232, 0.76)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Tool Compliancy metrics',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
