import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BannedComponent } from './banned/banned.component';
import { BannedEditComponent } from './banned-edit/banned-edit.component';

const routes: Routes = [
  {
    path: 'ban',
    component: BannedComponent
  },
  {
    path: 'ban/:id',
    component: BannedEditComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
