import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClient],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
    constructor(){
      
    }
}
