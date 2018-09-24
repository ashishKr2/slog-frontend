import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../shared/services/navbar.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css']
})
export class BrowseJobsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
