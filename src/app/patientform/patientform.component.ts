import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { Patient } from '../patient';


@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {
  
  patients: Map<number, Patient>;
  patient: Patient;

  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute, 
    private router: Router) { }

  updatePatient() {
    // this.patientChanged = this.hasChanged(this.patientFromState, this.patient);
    this.ngRedux.dispatch(
      {
        type: 'UPDATE',
        patients: this.patients,
        patient: this.patient,
      });

  }

  hasChanged(o: Patient, n: Patient): String {
    if (o.firstname != n.firstname || o.lastname != n.lastname || o.city != n.city || o.province != n.province || o.phone != n.phone || o.email != n.email) {
      return 'true';
    }
    else {
      return 'false';
    }
  }

  ngOnInit() {
    this.patient = this.ngRedux.getState().patient;
    this.patients = this.ngRedux.getState().patients;
  }

  private ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  done() {
    this.ngRedux.dispatch(
      {
        type: 'Done',
        patient: this.patient,
        patients: this.patients
      }
    );
    this.router.navigate(['/search']);
  }

}
