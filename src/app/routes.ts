import {Routes} from '@angular/router';
import {MapComponent} from './map/map.component';
import {SectionComponent} from './section/section.component';

export const appRoutes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'section', component: SectionComponent},
  {path: '', redirectTo: '/map', pathMatch: 'full'}
];
