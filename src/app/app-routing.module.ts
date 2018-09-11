import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'howItWorks', loadChildren: './components/how-it-works/howItWorks.module#HowItWorksModule' },
    { path: 'browseJobs', loadChildren: './components/browse-jobs/browseJobs.module#BrowseJobsModule' },
    { path: 'postProject', loadChildren: './components/post-project/postProject.module#PostProjectModule' },
   

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {

}