import { Component,Input, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output("kishok") carAdded:EventEmitter<string[]> =new EventEmitter<string[]>;
  cars:string[]=[];
  carName="";
  click(){
   this.cars.push(this.carName);
   this.carName="";
   this.carAdded.emit(this.cars);
  }
}
