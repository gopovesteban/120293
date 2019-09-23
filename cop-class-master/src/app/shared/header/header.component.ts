import { Component, OnInit } from '@angular/core';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show = false;
  greetings = 'Welcome!';
  private username = '';

  constructor(private _assetService: AssetService) {
    // this._assetService.getUserInfo().subscribe(
    //   result => {
    //     const fullName = result.name;
    //     if (fullName) {
    //       const nameMatch = fullName.match(/,(.*\w{2})/);
    //       if (nameMatch && nameMatch[1]) {
    //         this.username = nameMatch[1];
    //       }
    //     }
    //     this.greetings = this.setGreeting();
    //   }
    // );
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  public setGreeting(): string {
    return 'Good ' + this.greetFunction() + (this.username ? (', ' + this.username) : '') + ' !';
  }

  public greetFunction(): string {

    const today: Date = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      return 'morning';
    } else if (curHr < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  }

}
