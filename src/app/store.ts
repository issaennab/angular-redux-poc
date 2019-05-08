import { Patient } from './patient';
import { Meds } from './meds';
import { Doctor } from './doctor';

export interface IAppState {
    patients: Map<number, Patient>;
    patient: Patient;
}

const medsA = new Meds('Tylenol 3', 'Naeproxin', 'Sleeping Meds', '', '');
const medsB = new Meds('Pandol', 'Roboxin', '', '', '');
const medsC = new Meds('Asprin', 'IBProfin', 'OxyContin', '', '');
const medsD = new Meds('Oxycodone', '', '', '', '');

const docA = new Doctor('Mark', 'Cuban', '123 main st', '333-444-2222', 'drcuban.com');
const docB = new Doctor('Jane', 'Depp', '123 acme st', '333-456-2122', 'drdepp.com');
const docC = new Doctor('Peter', 'Maxim', '453 king st', '333-987-3457', 'drpeter.com');
const docD = new Doctor('Lisa', 'Smith', '999 queen st', '333-097-3789', 'drsmith.com');

const patA = new Patient(1, 'Bobby', 'Patel', 'Toronto', 'ON', '222-098-2638', 'bob@demo.com', docA, medsA);
const patB = new Patient(2, 'Melinda', 'Peters', 'Toronto', 'ON', '222-879-8756', 'mel@demo.com', docB, medsB);
const patC = new Patient(3, 'Melinda', 'Gates', 'Toronto', 'ON', '222-098-5432', 'lauren@demo.com', docC, medsC);
const patD = new Patient(4, 'Bill', 'Jobs', 'Toronto', 'ON', '222-8633', 'bill@demo.com', docD, medsD);

const pats = new Map<number, Patient>();
pats.set(patA.id, patA);
pats.set(patB.id, patB);
pats.set(patC.id, patC);
pats.set(patD.id, patD);


export const INITIAL_STATE: IAppState = {
    patients: pats,
    patient: null
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case 'UPDATE':
            return {
                patients: action.patients,
                patient: action.patient
            };
        case 'PatientDetails':
            return {
                patients: action.patients,
                patient: action.patient
            }
        case 'Done':
            return {
                patients: action.patients,
                patient: action.patient
            }
    }
    return state;
}