import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  // currentClasses = {};
  // currentStyles = {};
  
  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main St',
          city: 'Boston',
          state: 'MA'
        },
        // image: 'http://lorempixel.com/600/600/people/4',
        isActive: true,
        // balance: 100,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School St',
          city: 'Lynn',
          state: 'MA'
        },
        // image: 'https://picsum.photos/600/600',
        isActive: false,
        // balance: 200,
        registered: new Date('03/11/2017 06:20:00')
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill St',
          city: 'Miami',
          state: 'FL'
        },
        // image: 'https://picsum.photos/id/1027/600/600',
        isActive: true,
        // balance: 50,
        registered: new Date('11/02/2016 10:30:00')
      }
      ];

    this.loaded = true;

    // this.showExtended = false;
    // this.setCurrentClasses();
    // this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '' : '40px'
  //   }
  // }
}
