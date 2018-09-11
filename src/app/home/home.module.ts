import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ToastrModule } from 'ngx-toastr';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeMaterialModule } from './home-material.module';
import { HomeComponent } from './home.component';
// import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { BodyHomeComponent } from './body-home/body-home.component';
@NgModule({
    declarations: [
        HomeComponent,
        HeaderHomeComponent,
        BodyHomeComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        CommonModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
        NoopAnimationsModule,
        FlashMessagesModule.forRoot(),
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(),
        HomeMaterialModule
    ],
    providers: [],
    bootstrap: [HomeComponent],
    exports: [HttpModule]
})
export class HomeModule { }