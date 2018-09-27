import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../shared/services/project.service';
import { AuthServices } from '../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {postProjectModel} from '../../../shared/models/postProject-model';
@Component({
  selector: 'dash-myProject',
  templateUrl: './myProject.component.html',
  styleUrls: ['./myProject.component.css']
})
export class MyProjectComponent implements OnInit {
  user: string;
  username: string;
  myWork:postProjectModel[]=[];
  constructor(private authService: AuthServices,
    private projectService: ProjectService,
    private toastr:ToastrService
  ) { }

  async ngOnInit() {
    var data;
   data = await this.makeAsync(this.authService.getProfile());
this.projectService.myproject(data.user.username).subscribe(data=>{
 this.myWork=data;
 this.authService.myProject=true;
 this.authService.loadingObserable.next(true);
})
}
makeAsync(request) {
  return new Promise((resolve , reject)=>{
    request.subscribe(data=>{
      resolve(data);
    },err=>reject(err))
  });
}
}