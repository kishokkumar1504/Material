import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
    contactForm=new FormGroup({
      firstName:new FormControl('jeba',[Validators.required]),
      lastName:new FormControl({
        value:'alexraj',
        disabled:true
      }),
      email:new FormControl(),
      name:new FormControl(),
      isMarried:new FormControl(),
      country:new FormControl(),
      address:new FormGroup({
        city:new FormControl(),
        street:new FormControl(),
        pinCode:new FormControl()
      })
    });
    onClick(){
      console.log(this.contactForm.value);
    }
    get firstname(){
      return this.contactForm.get('firstName');
    }
}
