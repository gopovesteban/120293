import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SoftwareTileModel } from '../../../models/software-tile.model';
import {SoftwareToolVersionModel} from '../../../models/software-tool-version.model';
import { SoftwareToolService } from '../../../services/software-tool.service';


@Component({
  selector: 'app-software-tools-list',
  templateUrl: './software-tools-list.component.html',
  styleUrls: ['./software-tools-list.component.scss']
})
export class SoftwareToolsListComponent implements OnInit {
  public selectedIndex;
  public softwareTools;
  @Output() toolWasSelected = new EventEmitter<SoftwareTileModel>();


  constructor (private softwareService: SoftwareToolService) {}
  ngOnInit() {
    this.loadSoftwareTools();
  }
  loadSoftwareTools() {
    this.softwareService.getSoftwareTools().subscribe( data => {
      this.softwareTools = data;
    });
  }
  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

  onToolSelected(tool: SoftwareTileModel) {
    this.toolWasSelected.emit(tool);
  }

}
