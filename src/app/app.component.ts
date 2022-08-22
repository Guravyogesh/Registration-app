import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


interface RegisterUser {
  name: string;
  lastname: string;
  phonenumber: string;
  dropdown: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: RegisterUser;
  submitted = false;
  constructor() {
    this.user = {} as RegisterUser;
    // this.user.dropdown= "India";
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastname: new FormControl(this.user.lastname, [
        Validators.required,
        Validators.minLength(5),
      ]),
      phonenumber: new FormControl(this.user.phonenumber, [
        Validators.required,
        // Validators.minLength(10),    
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
      dropdown: new FormControl(this.user.dropdown, [
        Validators.required,
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }
  get lastname() {
    return this.reactiveForm.get('lastname')!;
  }
  get phonenumber() {
    return this.reactiveForm.get('phonenumber')!;
  }
  get dropdown() {
    return this.reactiveForm.get('dropdown')!;
  }

  public submit(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }
    //alert("Your account has been created");
    alert('SUCCESS!! :-)\n\n Your account has been created \n\n' + JSON.stringify(this.reactiveForm.value))
    this.user = this.reactiveForm.value;
    console.info('Name:', this.user.name);
    console.info('Lastname:', this.user.lastname);
    console.info('Phonenumber:', this.user.phonenumber);
    console.info('Dropdown:', this.user.dropdown);
    this.onReset();
  }
  onReset(): void {
    this.submitted = false;
    this.reactiveForm.reset();
  
  }

}
