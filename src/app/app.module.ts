import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import { MapComponent } from './map/map.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SectionComponent } from './section/section.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import { ChangeCoordsComponent } from './change-coords/change-coords.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidemenuComponent,
    SectionComponent,
    ChangeCoordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDf1UU4Zz6Z-c-6_bv-zOel5_yCYxtjTQE',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
