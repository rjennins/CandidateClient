import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';

const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'addcandidate', component: CandidateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
