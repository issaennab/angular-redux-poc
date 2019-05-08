import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Patient } from '../patient';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctorform',
  templateUrl: './doctorform.component.html',
  styleUrls: ['./doctorform.component.css']
})
export class DoctorformComponent implements OnInit {

  doctor: Doctor;

  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute,
    private router: Router) { }

  updateDoctor() {
    
    this.ngRedux.dispatch(
      {
        type: 'UPDATE',
        // patients: this.patients,
      });

  }

  hasChanged(o: Doctor, n: Doctor): String {

    if (o.address != n.address || o.firstname != n.firstname || o.lastname != n.lastname || o.phone != n.phone || o.website != n.website) {
      return 'true';
    }
    else {
      return 'false';
    }
  }

  ngOnInit() {
    
    this.doctor = this.ngRedux.getState().patient.doctor;
    // this.patients = this.ngRedux.getState().patients;
    // this.patientFromState = this.ngRedux.getState().patient;
  }

  private ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  done() {

    console.log('Doctor Done');
    console.log(this.ngRedux.getState)
    // this.ngRedux.dispatch(
    //   {
    //     type: 'Done',
    //     patients: this.ngRedux.getState().patients
    //   }
    // );
    this.router.navigate(['/search']);
  }

}
