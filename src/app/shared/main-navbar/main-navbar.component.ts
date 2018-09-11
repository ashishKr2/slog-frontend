import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
