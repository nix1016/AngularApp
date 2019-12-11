import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>'
  // styleUrls: ['./user.component.css']
  /* styles: [`
    h2 {
      color: blue
    }
  `] */
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {
    
  }

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
      }
    }
  }

}