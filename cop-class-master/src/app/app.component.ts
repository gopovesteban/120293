import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Opportunity';
  public env = environment.environmentName;
  public uiBuild: number;
  public apiBuild: number;

  constructor() { }

  ngOnInit() {
    this.getUiBuild();
    this.getApiBuild();
  }

  getUiBuild() {
    this.uiBuild = 1.2;
  }

  getApiBuild() {
    this.apiBuild = 1.2;
  }

}
