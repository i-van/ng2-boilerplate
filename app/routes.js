import { provideRouter } from '@angular/router';
import BlockComponent from './components/block/component';
import BlockIndexComponent from './components/block/index/component';
import BlockDetailsComponent from './components/block/details/component';
import BlockHelpComponent from './components/block/help/component';
import HomeComponent from './components/home/component';

export let routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'block/:id', component: BlockComponent, children: [
    { path: '', component: BlockIndexComponent },
    { path: 'details', component: BlockDetailsComponent },
    { path: 'help', component: BlockHelpComponent }
  ] }
];

export const APP_ROUTER_PROVIDERS = provideRouter(routes);
