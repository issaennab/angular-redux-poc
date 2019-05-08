import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  patients: Map<number, Patient>;
  patientChanged: String;
  doctorChanged: String;
  medsChanged: String;
  selectedPatient: Patient;


  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) { }

  ngOnInit() {
    
    this.patients = this.ngRedux.getState().patients;
  }

  onSelect(patient: Patient): void {

    this.selectedPatient = patient;
    console.log(this.selectedPatient);
    console.log(this.patients);
    this.ngRedux.dispatch(
      {
        type: 'PatientDetails',
        patients: this.patients,
        patient: this.selectedPatient
      }
    );
    this.router.navigate(['/patient']);
  }

}
