import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KingdomsComponent } from './kingdoms/kingdoms.component';
import { AlliancesComponent } from './alliances/alliances.component';

const routes: Routes = [
  {
    path: 'kingdoms',
    component: KingdomsComponent
  },
  {
    path: 'kingdoms/:id',
    component: AlliancesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
