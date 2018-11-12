import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/services/navbar.service';
import { FormControl } from '@angular/forms';
import { AuthServices } from '../../shared/services/auth.service';
import { postProjectModel } from '../../shared/models/postProject-model';
import { ProjectService } from '../../shared/services/project.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ANIMATION_TYPES } from 'ngx-loading';
import { FilterPipe } from 'ngx-filter-pipe';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css']
})
export class BrowseJobsComponent implements OnInit {
  myControl = new FormControl();

  jobs: postProjectModel[] = [];
  email: string;
  username: string;
  keyword: string;
  jb: any;
  key = new FormControl();
  formCtrlSub: Subscription;
  public loading = false;
  public ANIMATION_TYPES = ANIMATION_TYPES;

  PN: any = { projectName: '' };
  PD: any = { projectDetail: '' };
  PS: any = { skills: '' };
  PB: any = { projectSize: '' };
  constructor(public nav: NavbarService,
    private authService: AuthServices,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private filterPipe: FilterPipe
  ) {
    // console.log(filterPipe.transform(this.users, { name: 'M' }));
  }

  ngOnInit() {
    this.loading = true;
    this.nav.show();
    //fetching all job details
    this.authService.browseJob().subscribe(data => {
      this.jobs = data;
      // this.jb = data.map(x => x.projectName);
      //  console.log("*//*/*/*/*", this.jobs);
      this.loading = false;
    });
    this.authService.getProfile().subscribe(profile => {
      this.email = profile.user.email;
      this.username = profile.user.username;
    })
  }
  bid(job: any) {
    if (this.email) {
      const saveBid = {
        id: job._id,
        project_owner: job.username,
        email: this.email,
        project_bidder: this.username
      }
      this.projectService.bid(saveBid).subscribe(data => {
        if (data.success) {
          this.toastr.info("Bid Successfull");
        } else {
          console.log("error");
        }
      })
    } else {
      this.toastr.info("To bid the project ... Please Login");
    }

  }
  //search the project with keyword
  Search() {
    const key = {
      keyword: this.keyword
    }
    this.projectService.search(key).subscribe(data => {
      this.jobs = data;
    })
  }
  ngAfterViewInit() {
    this.formCtrlSub = this.key.valueChanges
      .debounceTime(500)
      .subscribe(val => {
        const key = {
          keyword: val
        }
        this.projectService.search(key).subscribe(data => {
          this.jobs = data;
        })
      })
  }
}
