import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {PostProjectComponent} from'./post-project.component';
import { PostProjectMaterialModule } from './post-project-material.module';

const appRoutes:Routes=[
    {path:'',component:PostProjectComponent}
];

@NgModule({
    imports: [
      CommonModule,FormsModule,      
      RouterModule.forChild(appRoutes),
      PostProjectMaterialModule
    ],
    declarations: [
     PostProjectComponent
      
    ]
  })
  export class PostProjectModule { }