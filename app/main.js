// import 'es6-shim/es6-shim';
// import 'es6-promise/dist/es6-promise';
import 'reflect-metadata/Reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './routes';
import AppComponent from './components/app/component';

// import { BlogService } from './services/blog.service';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  HTTP_PROVIDERS//,
  // BlogService
]);
