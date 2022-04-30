import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ModalController } from '@ionic/angular';

import { AddNewAppointmentPage } from '../bookings/add-new-appointment/add-new-appointment.page';

// import { UpdateAppointmentPage } from '../update-appointment/update-appointment.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  today: number = Date.now();

  model: NgbDateStruct;
  date: {year: number, month: number};
  show = true;

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private calendar: NgbCalendar,private menu: MenuController,public modalCtlr: ModalController,public menuCtrl: MenuController) {
    // this.getAllAppointment()
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  accountPages = [
    {
       title: 'Log Out',
       url: '/login',
       ionicIcon: 'log-out'
    }
  ]

 openMenu() {
  this.menuCtrl.open();
}

closeMenu() {
  this.menuCtrl.close();
}

toggleMenu() {
  this.menuCtrl.toggle();
}
  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewAppointmentPage,
    })
    modal.onDidDismiss().then(newAppointment =>{
      // this.getAllAppointment();
    })
    return await modal.present();
  }

  // getAllAppointment(){
  //   this.todoList = this.todoService.getAllAppointments()
  //   console.log(this.todoService.getAllAppointments());
  // }

  // delete(key: string) { 
  //   this.todoService.deleteAppointment(key)
  //   this.getAllAppointment()
  // }

  async update(selectedAppointment: any){
    // const modal = await this.modalCtlr.create({
    //   component: UpdateAppointmentPage,
    //   componentProps: {appointment: selectedAppointment}
    // })

    // modal.onDidDismiss().then(()=>{
    //   this.getAllAppointment()
    // })
    
    // return await modal.present()
  }

}
