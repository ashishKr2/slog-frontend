import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthServices } from '../../shared/services/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ResetPassModel } from '../../shared/models/resetPass-model';
@Component({
    selector: 'forget-pass',
    templateUrl: './forgetPass.component.html',
    styleUrls: ['./forgetPass.component.css']
})
export class ForgetPassComponent implements OnInit {
    email: string;
    myForm: FormGroup;
    constructor(private toastr: ToastrService,
        private authService: AuthServices,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.myForm = this.fb.group({

            email: ['', Validators.required],

        });

    }
    VerifyEmail() {
        const user = {
            email: this.myForm.value.email
        }
        this.authService.forgetPassword(user)
            .subscribe(data => {
                if (data.success) {
                    this.toastr.info('Check your email to reset pasword');
                }
                else {
                    this.toastr.info('Something Went wrong..');

                }
            }, error => this.toastr.info(error.error.message)
            );
    }
}
