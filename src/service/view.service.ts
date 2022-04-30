import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private client: Client[]=[  {
    id: 'd1',
    name: 'Mr Smith',
    email: 'mrsmith@email.com',
    phone: '012345678',
    imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  }]

  constructor() { }

  getAllUsers()
  {
      return [...this.client];
  }
  getUser(clientId: String) {
    return {
      ...this.client.find((user) => {
        return user.id === clientId;
      }),
    };
  }
  deleteUser(userId: String) {
    this.client = this.client.filter((user) => {
      return user.id !== userId;
    });
  }
  updateUser(client: Client){

  }
}
