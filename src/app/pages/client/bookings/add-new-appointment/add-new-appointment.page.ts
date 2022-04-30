import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { format,parseISO } from 'date-fns';

import { BookingsService } from 'src/service/bookings.service';

@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.page.html',
  styleUrls: ['./add-new-appointment.page.scss'],
})
export class AddNewAppointmentPage implements OnInit {

  categories =[]
  categorySelectedCategory: any;

  newAppointmentObj = {};
  
  userId: any;
  date: any ;
  docId:any;
  bookingType: any;

  itemCategory: any;

  modes = ['date','date-time','month','time'];
  selectedMode = 'date';
  showPicker = false;

  dateValue = format(new Date(),'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';

  constructor(public modalCtlr: ModalController, private book : BookingsService) {
      this.setToday();
   }

  ngOnInit() { }

  today : String = new Date().toISOString();

  async add(){
    var booking = {
      // id: 1,
      userId: "93101e96-3dc4-4e41-a57a-6e3ab1840b2c",
      date: this.date,//"2020-10-10",
      docId: "77f610a6-d615-458b-a268-a878581ca448",
      description: this.bookingType
    }
    this.book.addBooking(booking);
    this.dismis()
  }
  
  setToday(){
    this.formattedString = format(parseISO(format(new Date(),'yyyy-MM-dd') + 'T09:00:00.000Z'),'HH:mm, d, yyyy');
  }

  dateChanged(value: any){
    this.dateValue = value;
    this.formattedString = format(parseISO(value),'HH:mm, d, yyyy');
    this.showPicker = false;
  }

  selectCategory(index: string | number){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newAppointmentObj);
  }

  tick(){
   // console.log(this.formattedString = format(parseISO(value),'HH:mm, d, yyyy'))
  }
  close()
  {
    this.date.cancel();
  }
}


