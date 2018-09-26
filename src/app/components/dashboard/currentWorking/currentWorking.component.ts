import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';
import {AuthServices} from '../../../shared/services/auth.service';
@Component({
  selector: 'dash-currentWorking',
  templateUrl: './currentWorking.component.html',
  styleUrls: ['./currentWorking.component.css']
})
export class CurrentWorkingComponent implements OnInit {
 datas:string;
  constructor(private projectService:ProjectService,
    private authService:AuthServices
    ) { }

async ngOnInit() {
  var data;
   data = await this.makeAsync(this.authService.getProfile());
  this.projectService.bids((data.user.email)).subscribe(data=>{
     this.datas=data;
   });
  
  }
  makeAsync(request) {
    return new Promise((resolve , reject)=>{
      request.subscribe(data=>{
        resolve(data);
      },err=>reject(err))
    });
  }
}
