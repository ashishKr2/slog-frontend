import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { DashboardComponent } from './dashboard.component';
import { DashNavComponent } from './dashboard-navbar/dash-nav.component';
import { InboxComponent } from './inbox/inbox.component';
import { MyProjectComponent } from './myProjects/myProject.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardMaterialModule } from './dashboard-material.module';
import { DashComponent } from './dash/dash.component';
import { CurrentWorkingComponent } from './currentWorking/currentWorking.component';
const appRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(appRoutes),
    DashboardMaterialModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  })

  ],
  declarations: [
    DashboardComponent,
    DashNavComponent,
    InboxComponent,
    MyProjectComponent,
    ProfileComponent,
    DashComponent,
    CurrentWorkingComponent,
   

  ]
})
export class DashboardModule { }