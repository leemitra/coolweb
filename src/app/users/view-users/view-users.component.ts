import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userId: string='';
  userDetails:any;

  constructor(private userservice: UserService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(data=>{
          this.userId=data['id'];
     
    })

    this.userservice.viewuser(this.userId).subscribe(data=>{
      this.userDetails = data;
      console.log(data);
    })
    
  }


}
