import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ActivatedRouteSnapshot, CanActivate,Router } from '@angular/router';

const baseUrl ='http://10.10.2.5:3000';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient, private route : Router) { }

  getAllBookings(){
    return this.http.get(baseUrl+'/bookings');
  }

  addBooking(book : any){
    const res = this.http.post(baseUrl+'/bookings',book);
    res.subscribe((data) =>{
      console.log(data)
    })
    return res;
  }
  updateBooking(book : any,id : number){
    const res = this.http.patch(`${baseUrl}/bookings/${id}`,book);
    res.subscribe((data) => {
      console.log(data);
    });
    return res;
  }

  removeBooking(id : number){
    const res = this.http.delete(`${baseUrl}/bookings/${id}`);
    res.subscribe((data) => {
      console.log(data);
    });
    return res;
  }

  update(book :any){
    const res = this.http.put(baseUrl+'/bookings',book);
    res.subscribe((data) =>{
      console.log(data)
    })
    return res;
  }

  getAvailable(){
    return this.http.get(baseUrl+'/bookings');
  }

}
