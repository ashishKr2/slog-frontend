import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {SignupModel} from '../../../shared/models/signup-model';
@Component({
  selector: 'dash-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: SignupModel[]=[];
  name:string;
  username:string;
  email:string;
  constructor(private authService: AuthServices,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    })
  }

}
