import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-design-tools-version',
  templateUrl: './design-tools-version.component.html',
  styleUrls: ['./design-tools-version.component.scss']
})
export class DesignToolsVersionComponent implements OnInit {
  @Input() designTool;
   searchTerm;
  constructor() { }

  ngOnInit() {
  }

}
