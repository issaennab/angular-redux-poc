import { Doctor } from './doctor';
import { Meds } from './meds';

export class Patient {
    public id: number;
    public firstname: String;
    public lastname: String;
    public city: String;
    public province: String;
    public phone: String;
    public email: String;
    public doctor: Doctor;
    public meds: Meds;

    public constructor(id: number, firstname: String,
        lastname: String,
        city: String,
        province: String,
        phone: String,
        email: String,
        doctor: Doctor,
        meds: Meds
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
        this.province = province;
        this.phone = phone;
        this.email = email;
        this.doctor = doctor;
        this.meds = meds;
    }

}