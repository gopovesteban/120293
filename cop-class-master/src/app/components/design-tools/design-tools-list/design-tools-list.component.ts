import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DesignToolService } from 'src/app/services/design-tool.service';
import {SoftwareTileModel} from '../../../models/software-tile.model';
import {DesignTileModel} from '../../../models/design-tile.model';

@Component({
  selector: 'app-design-tools-list',
  templateUrl: './design-tools-list.component.html',
  styleUrls: ['./design-tools-list.component.scss']
})
export class DesignToolsListComponent implements OnInit {

  public designTools;
  @Output() toolWasSelected = new EventEmitter<DesignTileModel>();

  constructor (private designToolService: DesignToolService) {}
  ngOnInit() {
    this.loadDesignTools();
  }
  loadDesignTools() {
    this.designToolService.getDesignTools().subscribe( data => {
      this.designTools = data;
    });
  }

  onToolSelected(tool: DesignTileModel) {
    this.toolWasSelected.emit(tool);
  }

}
