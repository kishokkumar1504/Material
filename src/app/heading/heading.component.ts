import { Component, Input ,OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges,OnInit {
     @Input() text='';
     ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges Called");
     }

     ngOnInit():void{
       this.text='hello kishok you are finzly employee';
       console.log("hi iam nginit()")
     }
}
