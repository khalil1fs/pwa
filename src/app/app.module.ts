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
import { EtatEtapeCompagneCreateComponent } from './etat-etape-compagne/etat-etape-compagne-create/etat-etape-compagne-create.component';
import { EtatEtapeCompagneEditComponent } from './etat-etape-compagne/etat-etape-compagne-edit/etat-etape-compagne-edit.component';
import {RouterModule} from "@angular/router";
import { LangueListComponent } from './langue-list/langue-list.component';
import {EtatEtapeCompagneListComponent} from "./etat-etape-compagne/etat-etape-compagne-list/etat-etape-compagne-list.component";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    EtatEtapeCompagneComponent,
    EtatEtapeCompagneListComponent,
    EtatEtapeCompagneCreateComponent,
    EtatEtapeCompagneEditComponent,
    LangueListComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path:'langue', component: LangueListComponent },
      { path:'etat-etape-compagne', component: EtatEtapeCompagneListComponent  },
    ]),
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
