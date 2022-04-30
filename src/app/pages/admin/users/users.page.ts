import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../../service/users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any;

  constructor(private usersService: UsersService,private route : Router) { }

  ngOnInit() {
    this.run();
  }

  run(){
     this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users)
     });
  }

  getUserById(id:number){
    // this.usersService.getUserByEmail(); get user by id
  }
  updateUser(id:any){
    this.route.navigate(['admin-update',id]);
  }

  addUser(){
    this.route.navigateByUrl('add-user');
  }
}
