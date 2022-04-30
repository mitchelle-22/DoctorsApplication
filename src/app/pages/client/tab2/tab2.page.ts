import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Bookings } from 'src/app/models/booking.model';
import { User } from 'src/app/models/user.model';
import { BookingsService } from 'src/service/bookings.service';
import { AddNewAppointmentPage } from '../bookings/add-new-appointment/add-new-appointment.page';
import { UpdateAppointmentPage } from '../bookings/update-appointment/update-appointment.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userId: any;
  date: any ;
  docId:any;
  bookingType: any;
  
  today: number = Date.now();

  bookings : any;
  router: any;
  
  //pastDay: number = today;
  constructor(public modalCtlr: ModalController, private bookService : BookingsService,private alertCtrl: AlertController) { 

  }

  loadedBooking : Bookings;
  
 async getAllBookings(){
    this.bookService.getAllBookings().subscribe((data) => {
    this.bookings = data;
    console.log(this.bookings)
    })
  }
  run(){
    this.getAllBookings();
  }

  async addNewItem(){
    const modal = await this.modalCtlr.create({
      component: AddNewAppointmentPage,
    })
    modal.onDidDismiss().then(newAppointment =>{
       this.getAllBookings();
    })
    //alert("successfully added to Appointments")
    return await modal.present();
    
  }

  removeBooking(id:number){    
    this.getAllBookings();this.alertCtrl
    .create({
      header: 'Are you sure?',
      message: 'Do you really want to cancel the appointment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.bookService.removeBooking(id);
            console.log(this.loadedBooking);
          },
        },
      ],
    })
    .then((alertEl) => {
      alertEl.present();
    });
  }

  async update(selectedAppointment: any){
    const modal = await this.modalCtlr.create({
      component: UpdateAppointmentPage,
      componentProps: {appointment: selectedAppointment}
    })

    modal.onDidDismiss().then(()=>{
      // this.getAllAppointment()
    })
    
    return await modal.present()
  }
  
  ngOnInit() {
    this.getAllBookings();
  }
}