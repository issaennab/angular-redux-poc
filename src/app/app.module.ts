import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import {IAppState, rootReducer, INITIAL_STATE} from './store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PatientformComponent } from './patientform/patientform.component';
import { DoctorformComponent } from './doctorform/doctorform.component';
import { MedsformComponent } from './medsform/medsform.component';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientformComponent,
    DoctorformComponent,
    MedsformComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension){
   
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);

  }
}
