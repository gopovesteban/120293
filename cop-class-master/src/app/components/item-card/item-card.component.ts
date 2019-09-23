import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Fix this after using snippets
// import { PoC, Status, Worker } from '../../shared/interfaces/reuse-catalog.interface';
import { AssetService } from 'src/app/shared';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  /* Shows/hide spinner when loading user data at start */
  loading = true;

  /* Show/hide spinner when updating PoC status */
  updateLoading = false;

  /* Here we store user info */
  currentUser;

  /* (NOT USED YET) If current user is the owner he can edit stuff */
  canEdit = false;

  /* If current user is tadmin he can change status */
  isAdmin = false;

  /* Local variables that recieve the Object.assign values from dialog service */
  _id: string;
  name: string;
  owner: string;
  collaborators: Worker[];
  presentationDate: Date;
  pathway: string;
  // status: Status;
  status: any;
  description: string;
  createdAt: Date;

   /* Char limit to show on description and goal texts */
   charLimit = 420;

   /* Tooltip message to show on description and goal texts */
   expandTooltip = 'Click to show/hide details.';

  constructor(
    @Optional() public matDialogRef: MatDialogRef<ItemCardComponent>,
    // @Optional() @Inject(MAT_DIALOG_DATA) data: PoC, private _assetService: AssetService
    @Optional() @Inject(MAT_DIALOG_DATA) data: any, private _assetService: AssetService
  ) {
    Object.assign(this, data);
    // this._assetService.getUserInfo().subscribe(
    //   result => {
    //     this.currentUser = result;
    //     this.checkIsApprover(this.currentUser);
    //     this.checkCanEdit(this.currentUser);
    //     this.loading = false;
    //   }
    // );
  }

  ngOnInit() {

  }

  checkCanEdit(user) {
    if (user === this.owner) {
      this.canEdit = true;
    }
  }

  checkIsApprover(user) {
    if (this.pathway === 'Application') {
      if (user.idsid === 'sujuetac' || user.idsid === 'ddelgado' || user.idsid === 'rgrimald') {
        this.isAdmin = true;
      }
    } else if (this.pathway === 'Cloud') {
      if (user.idsid === 'jcambron' || user.idsid === 'ddelgado') {
        this.isAdmin = true;
      }
    } else if (this.pathway === 'Data') {
      if (user.idsid === 'jjmulgra' || user.idsid === 'ddelgado') {
        this.isAdmin = true;
      }
    }
  }

  updateStatus(newStatus) {
    this.updateLoading = true;
    // const item: PoC = {
    const item: any = {
      _id: this._id,
      name: this.name,
      owner: this.owner,
      collaborators: this.collaborators,
      status: newStatus,
      pathway: this.pathway,
      description: this.description,
      presentationDate: this.presentationDate,
      createdAt: this.createdAt
    };
    // this._assetService.updateProject(item).subscribe(
    //   result => {
    //     this.status = result.status;
    //     console.log(result);
    //     this.updateLoading = false;
    //     this.matDialogRef.close({ newStatus: this.status });
    //   }
    // );
  }

  expandText() {
      this.charLimit =  this.charLimit === 420 ? 99999 : 420;
  }

}
