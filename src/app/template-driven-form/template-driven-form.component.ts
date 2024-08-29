import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
   countryList:Country[]=[
    new Country("1","INDIA"),
    new Country("2","NEPAL"),
    new Country("3","NEW ZEALAND")
   ]
   contact!:Contact;
   ngOnInit():void{
      this.contact={
        firstName:"Rohit",
        lastName:"Sharma",
        email:"rohit45@gmail.com",
        gender:"male",
        married:true,
        country:"1",
        address:{
          city:"mumbai",
          street:"FORT ROHIT",
          pincode:"400001"
        }
      }
   }
   onSubmit(form:NgForm){
    console.log(form); 
   }

}
class Country{
  id:string;
  cname:string;
  constructor(id:string,cname:string){
    this.id=id;
    this.cname=cname;
  }
}
class Contact{
  firstName!:string;
  lastName!:string;
  email!:string;
  gender!:string;
  married!:boolean;
  country!:string;
  address!:{
    city:string,
    street:string,
    pincode:string
  };

}