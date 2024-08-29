import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',

})
export class HelloWorldComponent {
    //date=new Date();
}
