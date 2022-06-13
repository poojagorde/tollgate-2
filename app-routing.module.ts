import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TeamSearchComponent } from './team-search/team-search.component';

const routes: Routes = [
  {
    path: '', component: RegistrationFormComponent
  },
  {
    path: 'registration', component: RegistrationFormComponent
  },
  {
    path: 'search', component: TeamSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
