import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/user.model';
import { ViewService } from 'src/service/view.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.page.html',
  styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage implements OnInit {
  client: Client[] = [];

  constructor(public viewService: ViewService) { }

  ngOnInit() {
   this.client  = this.viewService.getAllUsers()
  }


}
