import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowseJobsComponent} from'./browse-jobs.component';


const appRoutes:Routes=[
    {path:'',component:BrowseJobsComponent}
];

@NgModule({
    imports: [
      CommonModule,FormsModule,      
      RouterModule.forChild(appRoutes)
    ],
    declarations: [
     BrowseJobsComponent
      
    ]
  })
  export class BrowseJobsModule { }