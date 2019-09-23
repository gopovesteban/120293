import { Component, OnInit } from '@angular/core';
import {DesignTileModel} from '../../models/design-tile.model';

@Component({
  selector: 'app-design-tools',
  templateUrl: './design-tools.component.html',
  styleUrls: ['./design-tools.component.scss']
})
export class DesignToolsComponent implements OnInit {
  selectedTool: DesignTileModel;
  constructor() { }

  ngOnInit() {
  }

}
