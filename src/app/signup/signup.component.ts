import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/services/navbar.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServices } from '../shared/services/auth.service';
import { SignupModel } from '../shared/models/signup-model';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login';
import * as EmailValidator from 'email-validator';
import { ValidateService } from '../shared/services/validate.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide1 = false;
  hide2 = false;
  signup: SignupModel[] = [];
  user: SignupModel;
  username: string;
  email: string;
  password: string;
  cnfpassword: string;
  myForm: FormGroup;
  socialName: string;
  // email = new FormControl('', [Validators.required, Validators.email]);

  // // email angular maretial validation
  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' :
  //       '';
  // }
  constructor(public nav: NavbarService,
    private socialAuthService: AuthService,
    private authService: AuthServices,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private validateService: ValidateService,
    private flashmessage: FlashMessagesService,
    private router: Router

  ) { }

  // social media login start
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.socialName = userData.name;
         this.toastr.info('Slog Validated Your Identity. Now You Can Signup ');
      }
    );
  

  }
  // social media login ends
  ngOnInit() {
    this.nav.show();
    // to validate email
    //console.log("./././", EmailValidator.validate("15681516416@gmail.cobauuua"));

    this.myForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cnfpassword: ['', Validators.required]
    });

  }

  Signup() {
    const newUser = {
      username: this.myForm.value.username,
      name:this.socialName,
      email: this.myForm.value.email,
      password: this.myForm.value.password
    }
    if (!this.validateService.validateRegister(newUser)) {
      this.toastr.info('Please fill all the fields');
      return false;
    }
    if (!this.validateService.validatePassword(newUser.password)) {
      this.toastr.info(' Password should be [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]');
      return false;
    }
    if (this.myForm.controls.password.value != this.myForm.controls.cnfpassword.value) {
      this.toastr.info('Password not matched');
      return false;

    }
    if (!this.validateService.validateEmail(newUser.email)){
      this.toastr.info('Please fill the valid email');
      return false;
    }
    this.authService.signup(newUser)
      .subscribe(data => {
        if (data.success) {
          // this.flashmessage.show('You are now registered and can login', { cssClss: 'alert-success', timeout: 3000 });
          this.toastr.info('Signup successfull');
          this.router.navigate(['/login']);
        }
        else {
          this.toastr.info('Something Went wrong..');

        }
      }, error => this.toastr.info(error.error.message)
      );

  }

}
