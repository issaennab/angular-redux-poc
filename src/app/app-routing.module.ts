import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientformComponent } from './patientform/patientform.component';
import { DoctorformComponent } from './doctorform/doctorform.component';
import { MedsformComponent } from './medsform/medsform.component';
import { SearchformComponent } from './searchform/searchform.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'patient', component: PatientformComponent },
  { path: 'doctor', component: DoctorformComponent },
  { path: 'meds', component: MedsformComponent },
  { path: 'search', component: SearchformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
