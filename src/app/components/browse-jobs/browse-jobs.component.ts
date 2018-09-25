import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/services/navbar.service';
import { FormControl } from '@angular/forms';
import{ AuthServices} from '../../shared/services/auth.service';
import {postProjectModel} from '../../shared/models/postProject-model';
@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css']
})
export class BrowseJobsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  jobs: postProjectModel[]=[];

  constructor(public nav: NavbarService,
    private authService:AuthServices
    ) { }

  ngOnInit() {
    this.nav.show();
    //fetching all job details
   this.authService.browseJob().subscribe(data=>{
     this.jobs=data;
   })
  }

}
