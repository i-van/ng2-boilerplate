import 'reflect-metadata/Reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './routes';
import AppComponent from './components/app/component';

bootstrap(AppComponent, [
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
