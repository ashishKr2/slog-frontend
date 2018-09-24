import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashNavComponent } from './dashboard-navbar/dash-nav.component';
import { InboxComponent } from './inbox/inbox.component';
import { MyProjectComponent } from './myProjects/myProject.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardMaterialModule } from './dashboard-material.module';
import { DashComponent } from './dash/dash.component';
const appRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(appRoutes),
    DashboardMaterialModule

  ],
  declarations: [
    DashboardComponent,
    DashNavComponent,
    InboxComponent,
    MyProjectComponent,
    ProfileComponent,
    DashComponent

  ]
})
export class DashboardModule { }