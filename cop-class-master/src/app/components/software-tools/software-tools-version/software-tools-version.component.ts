import {Component, Input, OnInit} from '@angular/core';
import { SoftwareTileModel} from '../../../models/software-tile.model';
import { SoftwareToolVersionModel} from '../../../models/software-tool-version.model';

@Component({
  selector: 'app-software-tools-version',
  templateUrl: './software-tools-version.component.html',
  styleUrls: ['./software-tools-version.component.scss']
})
export class SoftwareToolsVersionComponent implements OnInit {
  @Input() softwareTool;
  constructor() { }

  ngOnInit() {
  }

}
