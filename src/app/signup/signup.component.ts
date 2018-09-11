import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
