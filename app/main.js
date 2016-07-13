import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/main.less';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata/Reflect';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './routes';
import AppComponent from './components/app/app.component';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  HTTP_PROVIDERS
]);
