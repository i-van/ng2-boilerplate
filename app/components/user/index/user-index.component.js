import { Component } from '@angular/core';
import template from './user-index.component.html';
import UserService from '../user.service';

@Component({
  selector: 'user-index',
  providers: [UserService],
  template
})
export default class UserIndexComponent {
  constructor(userService: UserService) {
    this.userService = userService;

    this.users = [];
  }

  ngOnInit() {
    this.userService.fetchAll()
      .subscribe(users => this.users = users);
  }
}
