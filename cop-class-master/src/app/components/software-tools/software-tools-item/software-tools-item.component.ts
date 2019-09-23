import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SoftwareTileModel} from '../../../models/software-tile.model';

@Component({
  selector: 'app-software-tools-item',
  templateUrl: './software-tools-item.component.html',
  styleUrls: ['./software-tools-item.component.scss']
})
export class SoftwareToolsItemComponent implements OnInit {
  @Input() softwareTile;
  @Output() softwareToolSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.softwareToolSelected.emit();
  }
}
