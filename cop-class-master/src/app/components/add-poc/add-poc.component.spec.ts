import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of as observableOf } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddPocComponent } from './add-poc.component';

// Material imports
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

// Services
import { AssetService } from 'src/app/shared';
import { WorkerApiService } from 'src/app/shared';

class MockAssetService {

  getProjects() {
    return observableOf({ data: 'Test' });
  }

}

class MockWorkerApiService {

}

describe('AddPocComponent', () => {
  let component: AddPocComponent;
  let fixture: ComponentFixture<AddPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatTableModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSelectModule
      ],
      declarations: [AddPocComponent],
      providers: [
        { provide: AssetService, useClass: MockAssetService },
        { provide: WorkerApiService, useClass: MockWorkerApiService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
