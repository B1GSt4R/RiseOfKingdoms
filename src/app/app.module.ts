import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { KingdomsComponent } from './kingdoms/kingdoms.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsEditComponent } from './groups-edit/groups-edit.component';
import { AlliancesComponent } from './alliances/alliances.component';
import { AlliancesEditComponent } from './alliances-edit/alliances-edit.component';
import { MembersComponent } from './members/members.component';
import { MembersEditComponent } from './members-edit/members-edit.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { BlacklistEditComponent } from './blacklist-edit/blacklist-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    UserEditComponent,
    KingdomsComponent,
    GroupsComponent,
    GroupsEditComponent,
    AlliancesComponent,
    AlliancesEditComponent,
    MembersComponent,
    MembersEditComponent,
    BlacklistComponent,
    BlacklistEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    CardModule,
    OrganizationChartModule,
    BreadcrumbModule,
    SidebarModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
