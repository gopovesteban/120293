import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, of as observableOf } from 'rxjs';

// Services
import { AssetService } from '../../shared/';
import { WorkerApiService } from '../../shared';
import { ItemCardModalService } from '../../shared/services/item-card-modal.service';

// Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

// Interfaces
import { Status, PoC, Worker, Pathway } from '../../shared/interfaces/reuse-catalog.interface';

@Component({
  selector: 'app-add-poc',
  templateUrl: './add-poc.component.html',
  styleUrls: ['./add-poc.component.scss']
})
export class AddPocComponent implements OnInit {

  /*-- Object mat-table uses to get values for rows --*/
  dataSource: MatTableDataSource<PoC>;

  /*-- Column names to be used in table --*/
  displayedColumns: string[] = ['name', 'owner', 'pathway', 'status', 'date'];

  /*-- String to send in error actions --*/
  errorMessage: string;

  /*-- Using this form group to reset controls after submit --*/
  pocFormGroup: FormGroup;

  /*-- PoC object to be sent to API --*/
  poc: PoC;

  /*-- Min and Max dates for date picker validations --*/
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);

  /*-- Step for expansion panel. Start at -1 so all are closed. --*/
  step = -1;

  /*-- All controls used in form --*/
  appNameControl = new FormControl('', Validators.required);
  ownerControl = new FormControl('', Validators.required);
  collaboratorsControl = new FormControl('');
  pathwayControl = new FormControl('', Validators.required);
  descriptionControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);

  /*-- Array with values for pathway dropdown in form --*/
  pathways: Pathway[] = [
    { name: 'Application', owner: 'Sylvia Ujueta' },
    { name: 'Cloud', owner: 'Jeffrey Mulgrave' },
    { name: 'Data', owner: 'Jose Cambronero' }
  ];

  /*-- This is the observable which we update the values for autocomplete on worker picker --*/
  filteredWorkers: Observable<any[]>;

  /*-- Timer object to only call worker service after user stops typing (500ms) --*/
  timer;

  /*-- Show/hide spinner on worker picker input --*/
  loading = false;

  /*-- WorkersList is list we show in autocomplete options --*/
  workersList: Worker[] = [];

  /*-- CollabList saves all collaborators added in form --*/
  collabList: Worker[] = [];

  /*-- Set readOnly property for owner input if option has been selected, on clear set to false --*/
  ownerReadOnly = false;

  /*-- ProjectList is used as a temp when getting/creating projects before updating table datasource --*/
  projectsList: PoC[] = [];

  /*-- Values for progress bar --*/
  color = 'primary';
  mode = 'determinate';
  value = 0;

  constructor(public snackBar: MatSnackBar, private itemCardModalService: ItemCardModalService,
    private _assetService: AssetService, private workerApiService: WorkerApiService, private _formBuilder: FormBuilder) {
    this.getData();
  }

  ngOnInit() {
    this.pocFormGroup = this._formBuilder.group({
      name: this.appNameControl,
      owner: this.ownerControl,
      collaborators: this.collaboratorsControl,
      pathway: this.pathwayControl,
      description: this.descriptionControl,
      presentationDate: this.dateControl
    });

    this.ownerControl.valueChanges.subscribe(value => {
      this.getWorkers(value);
    });

    this.collaboratorsControl.valueChanges.subscribe(value => {
      this.getWorkers(value);
    });

    setTimeout(() => {
      this.step = 0;
    }, 400);
  }

  getWorkers(value: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (value && value.trim().length > 0) {
        this.loading = true;
        console.log('Calling API with:', value);
        this.workerApiService.getWorkers(value).subscribe(data => {
          this.workersList = [];
          data.hits.forEach(worker => {
            this.workersList.push({
              name: worker._source.FullNm,
              imgUrl: 'https://photos.intel.com/images/' + worker._id + '.jpg',
              id: worker._id
            });
          });
          this.filteredWorkers = observableOf(this.workersList);
          this.loading = false;
        });
      } else {
        this.filteredWorkers = observableOf([]);
      }
    }, 500);
  }

  selectedUser(ctrlValue: string, isOwner: boolean) {
    const exists = this.collabList.find(worker => {
      return worker.name === ctrlValue;
    });
    if (!exists) {
      const workerObj = this.workersList.find(worker => {
        return worker.name === ctrlValue;
      });
      workerObj.isOwner = isOwner;
      this.ownerReadOnly = isOwner;
      this.collabList.push(workerObj);
    } else if (isOwner) {
      exists.isOwner = isOwner;
      this.ownerReadOnly = true;
    }
    this.collaboratorsControl.setValue('');
  }

  removeCollaborator(workerId: string) {
    this.collabList = this.collabList.filter(worker => {
      return worker.id !== workerId;
    });
  }

  clearOwner(ctrlValue: string) {
    const id = this.collabList.find(worker => worker.name === ctrlValue).id;
    this.removeCollaborator(id);
    this.ownerReadOnly = false;
    this.ownerControl.setValue('');
  }

  getData() {
    const self = this;
    this._assetService.getProjects().subscribe(
      result => {
        result.forEach(item => {
          self.projectsList.push(item);
        });
        self.dataSource = new MatTableDataSource(self.projectsList);
        console.log('Items: ', self.projectsList);
      },
      error => this.errorMessage = <any>error
    );
  }

  onStepChange(): void {
    this.value = 0;

    if (this.appNameControl.valid) {
      this.value += 20;
    }

    if (this.ownerControl.valid) {
      this.value += 20;
    }

    if (this.pathwayControl.valid) {
      this.value += 20;
    }

    if (this.descriptionControl.valid) {
      this.value += 20;
    }

    if (this.dateControl.valid) {
      this.value += 20;
    }

  }

  setStep(index: number) {
    this.step = index;
    this.onStepChange();
  }

  nextStep() {
    this.step++;
    this.onStepChange();
  }

  prevStep() {
    this.step--;
    this.onStepChange();
  }

  getPathwayErrorMessage() {
    return this.pathwayControl.hasError('required') ? 'You must enter a value' :
      '';
  }

  getRequiredErrorMessage() {
    return this.appNameControl.hasError('required') ? 'You must enter a value' :
      '';
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 4000,
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  submitPoC() {
    this.poc = {
      name: this.appNameControl.value,
      owner: this.ownerControl.value,
      collaborators: this.collabList,
      status: Status.PENDING,
      pathway: this.pathwayControl.value.name,
      description: this.descriptionControl.value,
      presentationDate: this.dateControl.value,
      createdAt: new Date()
    };
    this._assetService.createProject(this.poc).subscribe(
      result => {
        console.log(result);
        this.step++;
        this.onStepChange();
        this.projectsList.push(this.poc);
        this.dataSource = new MatTableDataSource(this.projectsList);
        this.openSnackBar('Your PoC has been created ! We will contact you soon.');
        this.collabList = [];
        this.pocFormGroup.reset();
      },
      error => {
        this.errorMessage = error;
        this.step = 0;
        this.openSnackBar('Sorry there was an internal problem, please try again.');
        this.collabList = [];
        this.pocFormGroup.reset();
      }
    );
  }

  openItemCardDialog(item: PoC) {
    this.itemCardModalService.openModal({
      _id: item._id,
      owner: item.owner,
      collaborators: item.collaborators,
      pathway: item.pathway,
      presentationDate: item.presentationDate,
      name: item.name,
      status: item.status,
      description: item.description,
      createdAt: new Date()
    }).afterClosed()
      .subscribe(result => {
        console.log('Project card dialog closed.', result);
        item.status = result.newStatus;
      });
  }

}
