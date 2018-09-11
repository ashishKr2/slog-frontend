import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ToastrModule } from 'ngx-toastr';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FooterComponent } from './components/footer/footer.component';
import { MainNavbarComponent } from './shared/main-navbar/main-navbar.component';
import { AppMaterialModule } from './app-material.module';
import { NavbarService } from './services/navbar.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RoutingModule,
    CommonModule,
    FroalaEditorModule.forRoot(),FroalaViewModule.forRoot(),
    NoopAnimationsModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HomeModule,
    AppMaterialModule

  ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
  exports: [HttpModule]
})
export class AppModule { }
