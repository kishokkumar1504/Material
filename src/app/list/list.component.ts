import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule,CommonModule,FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   cars:string[]=[];
  carGetUpdate(carsData:string[]){
    this.cars=carsData;
  }
   
}
