import { Component } from '@angular/core';
import template from './users-index.html';
import UserService from '../../../services/user';

@Component({
  selector: 'users-index',
  providers: [UserService],
  template
})
export default class UsersIndexComponent {
  constructor(userService: UserService) {
    this.userService = userService;

    this.users = [];
  }

  ngOnInit() {
    this.userService.fetchAll()
      .subscribe(users => this.users = users);
  }
}
