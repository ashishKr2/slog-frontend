import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowseJobsComponent} from'./browse-jobs.component';
import {BrowseJobMaterialModule} from './browseJob-material.module';

const appRoutes:Routes=[
    {path:'',component:BrowseJobsComponent}
];

@NgModule({
    imports: [
      CommonModule,FormsModule,      
      RouterModule.forChild(appRoutes),
      BrowseJobMaterialModule,
      FormsModule,
      ReactiveFormsModule
      
    ],
    declarations: [
     BrowseJobsComponent
      
    ]
  })
  export class BrowseJobsModule { }