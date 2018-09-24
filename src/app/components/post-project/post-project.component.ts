import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../shared/services/navbar.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServices} from '../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.css']
})
export class PostProjectComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  fifthFormGroup:FormGroup;
  projectName:string;
  projectDetail:string;
  paymentMode:string;
  projectSize:string;
  skills:string;
  user:string;
  user1:string;
  constructor(public nav:NavbarService,
    private _formBuilder: FormBuilder,
    private authService:AuthServices,
    private toastr:ToastrService

    ) { }

  ngOnInit() {
    this.nav.hide();
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.user1 = profile.user.username;
  });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
   
  }

  submit(){
    const project={
      username:this.user1,
      projectName:this.firstFormGroup.value.firstCtrl,
      projectDetail:this.secondFormGroup.value.secondCtrl,
      paymentMode:this.thirdFormGroup.value.thirdCtrl,
      projectSize:this.fourthFormGroup.value.fourthCtrl,
      skills:this.fifthFormGroup.value.fifthCtrl
    }
    if(this.user){
      this.authService.postProject(project)
      .subscribe(data=>{
        if(data.success){
          this.toastr.info("Post project successfully")
        }
      });
    }
    else{
      this.toastr.info("Login first ...!!")
    }
    
  }

}
