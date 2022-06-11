import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { EtatEtapeCompagneComponent } from './etat-etape-compagne/etat-etape-compagne.component';
import { EtatEtapeCompagneListComponent } from './etat-etape-compagne/etat-etape-compagne-list/etat-etape-compagne-list.component';
import { EtatEtapeCompagneCreateComponent } from './etat-etape-compagne/etat-etape-compagne-create/etat-etape-compagne-create.component';
import { EtatEtapeCompagneEditComponent } from './etat-etape-compagne/etat-etape-compagne-edit/etat-etape-compagne-edit.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    EtatEtapeCompagneComponent,
    EtatEtapeCompagneListComponent,
    EtatEtapeCompagneCreateComponent,
    EtatEtapeCompagneEditComponent
  ],
  imports: [
    // RouterModule.forRoot([
    //   { path: }
    // ]),
    BrowserModule,

    ServiceWorkerModule.register('serviceworker.js', {
      enabled: true, // environment.production
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
