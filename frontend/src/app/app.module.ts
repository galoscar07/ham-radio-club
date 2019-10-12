import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClubsComponent } from './clubs/clubs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MembriiComponent } from './membrii/membrii.component';
import { ConcursuriComponent } from './concursuri/concursuri.component';
import { CentenarComponent } from './centenar/centenar.component';
import { ActivitatiComponent } from './activitati/activitati.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ClubsComponent,
    NotFoundComponent,
    MembriiComponent,
    ConcursuriComponent,
    CentenarComponent,
    ActivitatiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
