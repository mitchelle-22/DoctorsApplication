import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, User } from '../app/models/user.model';
const baseUrl ='http://10.10.2.5:3000';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
 
      // id: 'd1',
      // name: 'Dr Smith',
      // specilization: 'General',
      // email: 'drsmith@email.com',
      // imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
 

  constructor(private http:HttpClient, ) {}

  getAllUsers(){
    return this.http.get(baseUrl+'/user');
  }

  getUser(userId: number) {
    return this.http.get(`${baseUrl}+'/user'+${userId}`);
  }

  deleteUser(id: String) {
    return this.http.delete(`${baseUrl}+'/user/'+${id}`);
  }

  addUser(newUser: any) {
    return this.http.post(baseUrl+'/user/',newUser);
  }

  updateUser(user: any){
    let id = user.id;
    const res = this.http.put(`${baseUrl}+'/user/'+${id}`,user);
    // res.subscribe((res) => {
    //   console.log(res)
    // });
    return res;
  }
  getUserByEmail(mail:any){
    return this.http.post(baseUrl+'/user/email',mail);
  }
}
