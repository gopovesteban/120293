import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPocComponent } from './components/add-poc/add-poc.component';
import {DesignToolsComponent} from './components/design-tools/design-tools.component';
import {SoftwareToolsComponent} from './components/software-tools/software-tools.component';

const routes: Routes = [
  { path: '', component: AddPocComponent },
  { path: 'add-poc', component: AddPocComponent },
  { path: 'software-tools', component: SoftwareToolsComponent },
  { path: 'design-tools', component: DesignToolsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
