import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/services/navbar.service';
import { FormControl } from '@angular/forms';
import { AuthServices } from '../../shared/services/auth.service';
import { postProjectModel } from '../../shared/models/postProject-model';
import {ProjectService} from '../../shared/services/project.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css']
})
export class BrowseJobsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  jobs: postProjectModel[] = [];
  email: string;
  constructor(public nav: NavbarService,
    private authService: AuthServices,
    private projectService:ProjectService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.nav.show();
    //fetching all job details
    this.authService.browseJob().subscribe(data => {
      this.jobs = data;
    });
    this.authService.getProfile().subscribe(profile => {
      this.email = profile.user.email;
    })
  }
  bid(id: any) {
    const saveBid = {
      id:id,
      email:this.email
    }
    this.projectService.bid(saveBid).subscribe(data=>{
      if(data.success){
        this.toastr.info("Bid Successfull");
      }else{
        console.log("error");
      }
    })
  }
}
