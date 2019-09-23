import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of as observableOf } from 'rxjs';

import { ItemCardComponent } from './item-card.component';

// Material imports
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

// Interfaces
import { PoC, Status } from '../../shared/interfaces/reuse-catalog.interface';

// Services
import { AssetService } from 'src/app/shared';

class MockAssetService {

  getUserInfo() {
    return observableOf({ name: 'Test Name', idsid: 'idsid' });
  }

}

const mockPoCData: PoC = {
  name: 'Testing Name',
  owner: 'idsid',
  collaborators: [],
  presentationDate: new Date(),
  pathway: 'Pathway',
  status: Status.APPROVED,
  description: 'Description text',
  createdAt: new Date()
};

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressSpinnerModule
      ],
      declarations: [ ItemCardComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockPoCData },
        { provide: AssetService, useClass: MockAssetService },
        {
          provide: MatDialogRef, useValue: {
              close: () => {
                  return 'close';
              }
          }
      }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
