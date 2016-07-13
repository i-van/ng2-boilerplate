import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import AppHeaderComponent from './header/app-header.component';
import template from './app.component.html';
import './app.component.less';

@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent]
})

export default class AppComponent {}
