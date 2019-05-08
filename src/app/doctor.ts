export class Doctor {
    public firstname: String;
    public lastname: String;
    public address: String;
    public phone: String;
    public website: String;


    public constructor(firstname: String, lastname: String, address: String,
        phone: String, website: String) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
        this.website = website;
    }

}