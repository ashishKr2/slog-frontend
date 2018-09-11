import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {PostProjectComponent} from'./post-project.component';

const appRoutes:Routes=[
    {path:'',component:PostProjectComponent}
];

@NgModule({
    imports: [
      CommonModule,FormsModule,      
      RouterModule.forChild(appRoutes)
    ],
    declarations: [
     PostProjectComponent
      
    ]
  })
  export class PostProjectModule { }