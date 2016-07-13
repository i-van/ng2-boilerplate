import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import template from './user.component.html';

@Component({
  selector: 'user',
  directives: [ROUTER_DIRECTIVES],
  template
})
export default class UserComponent {}
