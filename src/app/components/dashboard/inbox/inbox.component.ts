import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../../../shared/services/auth.service';
import { ProjectService } from '../../../shared/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupModel } from '../../../shared/models/signup-model';
import { ChatserviceProvider } from '../../../shared/services/chatservice';
@Component({
  selector: 'dash-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  profile: SignupModel[] = [];
  name: string;
  project_bidder: any;
  active_username: string;
  email: string;
  project_owner: any;
  chatUsername: string;
  message: string;
  getChatData: any;
  count: number = 0;
  rightPart: boolean = false;
  currentMessage: any;
  constructor(private authService: AuthServices,
    private toastr: ToastrService,
    private router: Router,
    private projectService: ProjectService,
    private chatService: ChatserviceProvider
  ) { }

  async ngOnInit() {
    var data;
    data = await this.makeAsync(this.authService.getProfile());
    this.active_username = data.user.username;
    //getting the owner name and add in chat of project-bidder profile
    this.projectService.getProjectOwner((data.user.username)).subscribe(data => {
      this.project_owner = data;
      this.authService.activeWork = true;
      this.authService.loadingObserable.next(true);
      //removing project bidder name from list if project bidder bid their own project
      this.project_owner = this.project_owner.filter(name => name != this.active_username);
      this.count += this.project_owner.length;
      this.project_owner = Array.from(new Set(this.project_owner)); //get unique name from multiple name
    });
    //getting the bidder name and add in the chat of project-owner profile
    this.projectService.getProjectBidder((data.user.username)).subscribe(data => {
      this.project_bidder = data;
      this.project_bidder = this.project_bidder.filter(name => name != this.active_username);
      this.count += this.project_bidder.length;
      this.project_bidder = Array.from(new Set(this.project_bidder));
    });

  }
  makeAsync(request) {
    return new Promise((resolve, reject) => {
      request.subscribe(data => {
        resolve(data);
      }, err => reject(err))
    });
  }

  chat(username) {
    this.rightPart = true;
    this.chatUsername = username;
    const getMessage = {
      sender: this.active_username,
      reciver: this.chatUsername
    }
    this.projectService.getChat(getMessage).subscribe(data => {
      this.getChatData = data;
    })

  }
  ngAfterViewInit() {
    // get message from socket
    this.chatService.newMessageRecieved().subscribe(data => {
      // this.getChatData=Object.keys(data)
      // .map(function(k){
      //   return [k,data[k]];
      // });
      this.getChatData = data;
      console.log(this.getChatData);

    })
  }
  newMessage() {
    const newMesg = {
      message: this.message,
      active_username_sender: this.active_username,
      reciver: this.chatUsername
    }
    // this.projectService.chat(newMesg).subscribe(data=>{
    //   console.log("send",data);
    //    (<HTMLInputElement>document.getElementById("message")).value=" ";
    // })
    this.chatService.sendMessage(newMesg);
    this.getChatData=newMesg;
    (<HTMLInputElement>document.getElementById("message")).value = " ";
  }
}
