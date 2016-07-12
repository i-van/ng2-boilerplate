import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import template from './users.html';

@Component({
  selector: 'users',
  directives: [ROUTER_DIRECTIVES],
  template
})
export default class UsersComponent {}
