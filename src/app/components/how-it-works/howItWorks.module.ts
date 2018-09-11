import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HowItWorksComponent} from'./how-it-works.component';

const appRoutes:Routes=[
    {path:'',component:HowItWorksComponent}
];

@NgModule({
    imports: [
      CommonModule,FormsModule,      
      RouterModule.forChild(appRoutes)
    ],
    declarations: [
     HowItWorksComponent
      
    ]
  })
  export class HowItWorksModule { }