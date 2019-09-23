import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// Component to use
import { ItemCardComponent } from '../../components/item-card/item-card.component';
// Fix this after using snippets
// import { PoC } from '../../shared/interfaces/reuse-catalog.interface';

@Injectable({
  providedIn: 'root'
})

export class ItemCardModalService {

  constructor(private matDialog: MatDialog) { }

  // openModal(params?: PoC): MatDialogRef<ItemCardComponent, any> {
  openModal(params?: any): MatDialogRef<ItemCardComponent, any> {
    return this.matDialog.open<ItemCardComponent, any, string[]>(ItemCardComponent, {
      width: '70vw',
      height: '60vw',
      minHeight: '350px',
      minWidth: '400px',
      maxWidth: '900px',
      maxHeight: '450px',
      data: params,
      panelClass: 'field-selector-modal',
      autoFocus: false
    });
  }
}



