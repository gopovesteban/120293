import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddPocComponent } from './components/add-poc/add-poc.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

// Services
import { AssetService } from './shared/';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { DesignToolsComponent } from './components/design-tools/design-tools.component';
import { SoftwareToolsComponent } from './components/software-tools/software-tools.component';
import { DesignToolsItemComponent } from './components/design-tools/design-tools-item/design-tools-item.component';
import { DesignToolsListComponent } from './components/design-tools/design-tools-list/design-tools-list.component';
import { DesignToolsVersionComponent } from './components/design-tools/design-tools-version/design-tools-version.component';
import { SoftwareToolsItemComponent } from './components/software-tools/software-tools-item/software-tools-item.component';
import { SoftwareToolsListComponent } from './components/software-tools/software-tools-list/software-tools-list.component';
import { SoftwareToolsVersionComponent } from './components/software-tools/software-tools-version/software-tools-version.component';
import {DesignFilterPipe} from './components/design-tools/design-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddPocComponent,
    ItemCardComponent,
    DesignToolsComponent,
    SoftwareToolsComponent,
    DesignToolsItemComponent,
    DesignToolsListComponent,
    DesignToolsVersionComponent,
    SoftwareToolsItemComponent,
    SoftwareToolsListComponent,
    SoftwareToolsVersionComponent,
    DesignFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatTooltipModule,
    MatStepperModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatRadioModule,
    HttpClientModule,
  ],
  providers: [HttpClient, AssetService],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemCardComponent
  ]
})
export class AppModule { }
