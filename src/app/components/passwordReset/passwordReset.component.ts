import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/services/navbar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServices } from '../../shared/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidateService } from '../../shared/services/validate.service';

@Component({
  selector: 'passwordReset',
  templateUrl: './passwordReset.component.html',
  styleUrls: ['./passwordReset.component.css']
})
export class PasswordResetComponent implements OnInit {
  hide1 = false;
  hide2 = false;
  token: string;
  x: string;
  email: string;
  password: string;
  cnfpassword: string;
  myForm: FormGroup;

  constructor(public nav: NavbarService,
    private authService: AuthServices,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private validateService: ValidateService,

    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.nav.show();
    this.token = this.route.snapshot.params['token'];
    this.x = window.location.origin;
    this.email = this.token.substr(64);

    this.myForm = this.fb.group({
      password: ['', Validators.required],
      cnfpassword: ['', Validators.required]
    });

  }

  resetPassword() {
    const reset = {
      email: this.email,
      password: this.myForm.value.password
    }
    if (this.myForm.controls.password.value != this.myForm.controls.cnfpassword.value) {
      this.toastr.info('Password not matched');
      return false;
    }
    if (!this.validateService.validatePassword(reset.password)) {
      this.toastr.info(' Password should be [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]');
      return false;
    }
    this.authService.resetPassword(reset)
      .subscribe(data => {
        if (data.success) {
          this.toastr.info('Successfully changed password');
          this.router.navigate(['/login']);
        }
        else {
          this.toastr.info('Something Went wrong..');

        }
      }, error => this.toastr.info(error.error.message)
      );
  }

}
