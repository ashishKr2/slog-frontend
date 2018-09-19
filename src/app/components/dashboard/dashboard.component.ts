import { Component, OnInit } from '@angular/core';
import { AuthServices } from "../../shared/services/auth.service";

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthServices]
})
export class DashboardComponent implements OnInit {
    user: Object;
    user1: String;
    constructor(
        private authservice:AuthServices,
        private router:ActivatedRoute,
        private toastr:ToastrService,
        private routes:Router
    ){}
    ngOnInit(){
        this.authservice.getProfile().subscribe(profile => {
            this.user = profile.user;
            this.user1 = profile.user.username;
          });
    }
}