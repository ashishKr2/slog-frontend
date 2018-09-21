import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServices } from '../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from '../../shared/services/navbar.service';
@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    token: string;
    x: string;
    email: string;
    newToken: string;
    constructor(public nav: NavbarService,
        private authService: AuthServices,
        private router: Router,
        private route: ActivatedRoute,
        private toastr: ToastrService,

    ) { }

    ngOnInit() {
        this.nav.hide();
        this.token = this.route.snapshot.params['token'];
        console.log("***************", this.token);
    }
    agree() {
        const sendToken = {
            token: this.token
        }
        this.authService.verifivationEmail(sendToken)
            .subscribe(data => {
                if (data.success) {
                    this.toastr.info("Successfully verified.... Now you can login")
                    this.router.navigate(['/login']);
                }
                else {
                    console.log('Something Went wrong..');

                }
            }, error => console.log(error.error)
            );
    }

}
