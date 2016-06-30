import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import AppHeaderComponent from './header/component';
import template from './app.html';
import './style.less';

@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent]
})

export default class AppComponent {}
