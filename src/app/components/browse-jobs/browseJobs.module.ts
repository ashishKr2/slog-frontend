import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowseJobsComponent} from'./browse-jobs.component';
import {BrowseJobMaterialModule} from './browseJob-material.module';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';

const appRoutes:Routes=[
    {path:'',component:BrowseJobsComponent}
];

@NgModule({
    imports: [
      CommonModule,FormsModule,      
      RouterModule.forChild(appRoutes),
      BrowseJobMaterialModule,
      FormsModule,
      ReactiveFormsModule,
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
     BrowseJobsComponent
      
    ]
  })
  export class BrowseJobsModule { }