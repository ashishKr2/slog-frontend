import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../shared/services/navbar.service';
@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.css']
})
export class PostProjectComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
