import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import template from './user-index.component.html';
import FullNamePipe from '../full-name.pipe';
import UserService from '../user.service';

@Component({
  selector: 'user-index',
  providers: [UserService],
  pipes: [FullNamePipe],
  directives: [ROUTER_DIRECTIVES],
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
