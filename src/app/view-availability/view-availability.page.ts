import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-availability',
  templateUrl: './view-availability.page.html',
  styleUrls: ['./view-availability.page.scss'],
})
export class ViewAvailabilityPage implements OnInit {

  todoList = [
    { id:1 , day: 'Monday', time: '09:00 AM - 07:00 PM' },
    { id:2 , day: 'Tuesday', time: '09:00 AM - 07:00 PM' },
    { id:3 , day: 'Wednesday', time: '09:00 AM - 07:00 PM' },
    { id:4 , day: 'Thurday', time: '09:00 AM - 07:00 PM' },
    { id:5 , day: 'Friday', time: '09:00 AM - 07:00 PM' },
    { id:6 , day: 'Saturday', time: '09:00 AM - 01:00 PM' },
    { id:7 , day: 'Sunday', time: 'Holiday' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
