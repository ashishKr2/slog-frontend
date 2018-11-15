import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../../../shared/services/auth.service';
@Component({
  selector: 'default-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  profile: string;
  name:string;
  constructor(private authService: AuthServices) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      this.profile = data.user;
      this.authService.dashboard=true;
      this.authService.loadingObserable.next(true);
    })

    
  }
  

}
