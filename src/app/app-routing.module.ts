import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KingdomsComponent } from './kingdoms/kingdoms.component';
import { AlliancesComponent } from './alliances/alliances.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: 'allicances',
    component: AlliancesComponent
  },
  {
    path: 'kingdoms',
    component: KingdomsComponent
  },
  {
    path: 'kingdoms/:id',
    component: MembersComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'users/:id',
    component: UserEditComponent
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
