import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import template from './app-header.html';

@Component({
  selector: 'app-header',
  template,
  directives: [ROUTER_DIRECTIVES]
})

export default class AppHeaderComponent {}
