import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromisesPageComponent } from './promises-page/promises-page.component';
import { SelectedPromisesComponent } from './selected-promises/selected-promises.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesPageComponent,
    SelectedPromisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
