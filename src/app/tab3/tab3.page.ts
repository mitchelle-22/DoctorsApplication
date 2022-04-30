import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  selectedSlot;

  todoList = [
    { id:1 , day: 'Monday', time: '09:00 AM - 07:00 PM' },
    { id:2 , day: 'Tuesday', time: '09:00 AM - 07:00 PM' },
    { id:3 , day: 'Wednesday', time: '09:00 AM - 07:00 PM' },
    { id:4 , day: 'Thurday', time: '09:00 AM - 07:00 PM' },
    { id:5 , day: 'Friday', time: '09:00 AM - 07:00 PM' },
    { id:6 , day: 'Saturday', time: '09:00 AM - 01:00 PM' },
    { id:7 , day: 'Sunday', time: 'Holiday' },
  ];

  constructor(public modalController: ModalController) {}

  async presentModal(id) {
    console.log(id)
   

    this.todoList.forEach((element : any) => {
      
      if(id==element.id){
        // console.log(element);
        this.selectedSlot = element
        
      }
    });

    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: this.selectedSlot,
      animated:true
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }



}
