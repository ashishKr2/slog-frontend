import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PostProjectComponent} from'./post-project.component';
import { PostProjectMaterialModule } from './post-project-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const appRoutes:Routes=[
    {path:'',component:PostProjectComponent}
];

@NgModule({
    imports: [
      CommonModule,FormsModule,      
      RouterModule.forChild(appRoutes),
      PostProjectMaterialModule,
      ReactiveFormsModule
    ],
    declarations: [
     PostProjectComponent
      
    ]
  })
  export class PostProjectModule { }