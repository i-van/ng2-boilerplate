import { provideRouter } from '@angular/router';
import HomeComponent from './components/home/home.component';

import UsersComponent from './components/user/user.component';
import UsersIndexComponent from './components/user/index/user-index.component';

export let routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UsersIndexComponent }
  ] }
];

export const APP_ROUTER_PROVIDERS = provideRouter(routes);
