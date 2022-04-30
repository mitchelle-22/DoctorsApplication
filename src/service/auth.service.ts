import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ActivatedRouteSnapshot, CanActivate,Router } from '@angular/router';

const baseUrl ='http://10.10.2.5:3000';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate{
   data =  new Observable<any>();

flag : boolean = false;
  constructor(private http:HttpClient, private route : Router){ }

  getAllUsers(){
    return this.http.get(baseUrl+'/user');
  }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    console.log(this.flag);
    if (!this.flag) {
      this.route.navigate(['login']);
      return false;
    }
    return true;
  }

  isAuthenticated(obj:any): boolean{
  if(obj.status == 200){
    this.flag = true
    return this.flag;
  }
  else{
    return this.flag;
  }
}
  checkAuthenticated(){

   this.data.subscribe(res =>{

    if(res.status == 200){
      this.flag = true
       this.isAuthenticated(this.flag)
      return this.flag;
    }
    else{
      this.isAuthenticated(this.flag)
      return this.flag;
    }
   });
   console.log(this.flag)
  }
  signIn(loginObj:any){
    const res = this.http.post(baseUrl+'/auth/login',loginObj);
    this.data = res;
    return res;
  }
  signUp(registerObj:any){
    this.http.post(baseUrl+'/auth/register',registerObj).subscribe((res) =>{
      console.log(res);
    })
     return this.http.post(baseUrl+'/auth/register',registerObj);

  }
}
