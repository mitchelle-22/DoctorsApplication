import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControlName } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() id: number;
  @Input() day: string;
  @Input() time: string;
  updateDatesForm: any;

  constructor(private fb: FormBuilder, public modalController: ModalController) {

    this.updateDatesForm = this.fb.group({
      // day: new FormControlName[''],
      // time: new FormControlName[''],
      day: [''],
      time: ['']
    })
   }
  

  ngOnInit() {
    console.log(this.day,this.time);
  }

  

  get selectedDay() {
    return this.updateDatesForm.get('day');
  }

  get selectedTime() {
    return this.updateDatesForm.get('time');
  }


  onClick(){
    console.log('update me');
    // console.log(this.updateDatesForm.value);
    console.log(this.updateDatesForm.value);
    
  }
  dismiss() {
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
