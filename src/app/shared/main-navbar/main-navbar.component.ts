import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Router,NavigationEnd} from '@angular/router';
import { AuthServices} from '../services/auth.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  isLoggedIn:boolean;
  constructor(public nav:NavbarService,  private authService:AuthServices,  private router:Router   ) { }

  ngOnInit() {
    this.nav.show();
    this.authService.loadToken();
    this.isLoggedIn=this.authService.loggedIn();
    this.router.events.subscribe((evt)=>{
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    });
  }
logoutSubmit(){
  this.authService.LogOut();
  this.router.navigate(['/login']);
  return false;
}
}
