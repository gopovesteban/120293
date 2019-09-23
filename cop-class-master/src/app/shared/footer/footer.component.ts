import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public uiBuild = '3.2';
  public apiBuild = '2.4';
  public env = 'Production (FM)';

  constructor() { }

  ngOnInit() {
  }

}
