import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import template from './app.html';
// import style from './style.less';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app',
  template,
  // style,
  directives: [ROUTER_DIRECTIVES/*, HeaderComponent, FooterComponent*/]
})

export default class AppComponent {}
