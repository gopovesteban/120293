import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-design-tools-item',
  templateUrl: './design-tools-item.component.html',
  styleUrls: ['./design-tools-item.component.scss']
})
export class DesignToolsItemComponent implements OnInit {

  @Input() designTile;
  @Output() designToolSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.designToolSelected.emit();
  }

}
