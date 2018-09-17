import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../shared/services/navbar.service';
@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {
  employee:boolean=true;
  freelance:boolean=false;
  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }
hireBoolean(){
  this.employee=true;
  this.freelance=false;
}
workBoolean(){
  this.freelance=true;
  this.employee=false;
}
}
