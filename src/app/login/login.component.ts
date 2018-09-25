import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/services/navbar.service';
import { Router } from '@angular/router';
import { AuthServices } from '../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  user: Object;
  constructor(public nav: NavbarService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthServices
  ) { }

  ngOnInit() {
    this.nav.show();
    if (this.authService.checkStorage() == false) {
      const user = {
        email: this.email,
        password: this.password
      }

      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
         this.router.navigate(['/dashboard']);
       
      },
        err => {
          console.log(err);
          return false;
        });

    }
  }
  login() {
    const user = {
      email: this.email,
      password: this.password
    }
    this.authService.login(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
          this.router.navigate(['/dashboard']);
        },
          err => {
            console.log(err);
            return false;
          });
      }
      else {
        this.toastr.info('Check again Username or Password');
       
      }
    },error=>this.toastr.info(error.error)
    )
  }
}
