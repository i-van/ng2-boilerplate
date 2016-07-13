import { provideRouter } from '@angular/router';
import HomeComponent from './components/home/home.component';

import UserComponent from './components/user/user.component';
import UserIndexComponent from './components/user/index/user-index.component';
import UserEditComponent from './components/user/edit/user-edit.component';

export let routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent, children: [
    { path: '', component: UserIndexComponent },
    { path: ':id/edit', component: UserEditComponent }
  ] }
];

export const APP_ROUTER_PROVIDERS = provideRouter(routes);
