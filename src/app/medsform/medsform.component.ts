import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Patient } from '../patient';
import { Meds } from '../meds';

@Component({
  selector: 'app-medsform',
  templateUrl: './medsform.component.html',
  styleUrls: ['./medsform.component.css']
})
export class MedsformComponent implements OnInit {

  id: number;
  private sub: any;
  patients: Map<number, Patient>;
  @Input() meds: Meds;
  patientFromState: Patient;

  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute) { }

  updateMeds() {
    // this.medsChanged = this.hasChanged(this.patientFromState.meds, this.meds);
    var patient = Object.assign({}, this.patientFromState);
    patient.meds = this.meds;
    this.patients.set(this.id, patient);
    this.ngRedux.dispatch(
      {
        type: 'UPDATE',
        patients: this.patients,
        
      });

  }

  hasChanged(o: Meds, n: Meds): String {

    if (o.med1 != n.med1 || o.med2 != n.med2 || o.med3 != n.med3 || o.med4 != n.med4 || o.med5 != n.med5) {
      return 'true';
    }
    else {
      return 'false';
    }


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.patients = this.ngRedux.getState().patients;
    this.patientFromState = this.patients.get(this.id);
    this.meds = Object.assign({}, this.patientFromState.meds);
    
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
