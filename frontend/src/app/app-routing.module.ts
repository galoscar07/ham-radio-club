import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ClubsComponent} from './clubs/clubs.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MembriiComponent} from './membrii/membrii.component';
import {ConcursuriComponent} from './concursuri/concursuri.component';
import {ActivitatiComponent} from './activitati/activitati.component';
import {CentenarComponent} from './centenar/centenar.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cluburi', component: ClubsComponent },
  { path: 'membrii', component: MembriiComponent},
  { path: 'concursuri', component: ConcursuriComponent},
  { path: 'activitati', component: ActivitatiComponent},
  { path: 'centenar', component: CentenarComponent},
  { path: 'despre-noi', component: AboutusComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
