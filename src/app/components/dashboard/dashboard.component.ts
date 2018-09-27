import { Component, OnInit } from '@angular/core';
import { AuthServices } from "../../shared/services/auth.service";
import { NavbarService } from '../../shared/services/navbar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ANIMATION_TYPES } from 'ngx-loading';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [AuthServices]
})
export class DashboardComponent implements OnInit {
    user: Object;
    user1: String;
    public loading = false;
    public ANIMATION_TYPES = ANIMATION_TYPES;
    constructor(
        private authservice: AuthServices,
        private router: ActivatedRoute,
        private toastr: ToastrService,
        private routes: Router,
        private nav: NavbarService,

    ) { }
    ngOnInit() {
        this.loading = true;
        this.nav.show();
        this.authservice.loadingObserable.subscribe(flag => {
            if (flag && this.authservice.activeWork && this.authservice.profile &&
                this.authservice.dashboard && this.authservice.myProject) {
                this.loading = false;
            }
        })

        this.authservice.getProfile().subscribe(profile => {
            this.user = profile.user;
            this.user1 = profile.user.username;
            this.authservice.dashboard = true;
            this.authservice.loadingObserable.next(true);

        });
    }

}