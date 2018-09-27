import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  footerFlag:boolean = false;
  title = 'slogf';
  ngOnInit() {
    setTimeout(() => {
    this.footerFlag = true;
    }, 2000);
  }

}
