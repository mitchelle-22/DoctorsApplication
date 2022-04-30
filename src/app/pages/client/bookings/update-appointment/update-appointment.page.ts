import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingsService } from 'src/service/bookings.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.page.html',
  styleUrls: ['./update-appointment.page.scss'],
})
export class UpdateAppointmentPage implements OnInit {


  @Input() appointment: { value: { bookingType: any; date: any; itemCategory: any; }; key: any; };
  categories =[]
  categorySelectedCategory: any;

  newAppointmentObj = {}

  userId: any;
  date: any ;
  docId:any;
  bookingType: any;

  itemCategory: any;

  constructor(public modalCtlr:ModalController, private bookService : BookingsService) { }

  ngOnInit() {
    
  }

  today : String = new Date().toISOString();

  selectCategory(index: string | number){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async add(){
    var booking = {
      // id: 1,
      userId: "93101e96-3dc4-4e41-a57a-6e3ab1840b2c",
      date: this.date,//"2020-10-10",
      docId: "77f610a6-d615-458b-a268-a878581ca448",
      description: this.bookingType
    }
    this.bookService.addBooking(booking);
    this.dismis()
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  updateBooking(){
    var booking = {
      // id: 1,
      userId: "93101e96-3dc4-4e41-a57a-6e3ab1840b2c",
      date: this.date,//"2020-10-10",
      docId: "77f610a6-d615-458b-a268-a878581ca448",
      description: this.bookingType
    }
    this.bookService.update(booking);
  }
}