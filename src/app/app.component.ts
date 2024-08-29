import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { WorkingComponent } from './working/working.component';




@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styles: `
  h1 {
    color: #a144eb;
  }
`,
  imports: [NgClass,CommonModule,WorkingComponent], 
})

export class AppComponent {
   course:Course[]=[{
     id:1,title:"DSA"
   },{id:2,title:"JAVA"},{id:3,title:"Angular"}];
}
interface Course{
  id:number;
  title:string;
}
