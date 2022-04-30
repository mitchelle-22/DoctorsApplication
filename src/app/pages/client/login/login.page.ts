import { Component, OnInit } from '@angular/core';

import { FormControl,Validators, FormGroup,FormBuilder,NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { BookingsService } from 'src/service/bookings.service';
import { UsersService } from 'src/service/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
signInForm : FormGroup;
pwdIcon ="eye-outline";
showPassword: boolean = false;
msg : any;
  constructor(private fb : FormBuilder,  private auth : AuthService,  private users : UsersService, private book : BookingsService,private route : Router) {
    this.run();
   }
   togglePwd()
   {
     this.showPassword = !this.showPassword;
     this.pwdIcon = this.showPassword? "eye-off-outline":"eye-outline";
   }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email:["",Validators.email],
      password:["",Validators.required]
    });
    this.book.getAllBookings().subscribe((res) => {
      console.log(res);
    })
  }

  run(){
    this.users.getAllUsers().subscribe((res)=>{
      console.log(res);
    })
  }

onSubmit(): void {
  if(this.signInForm.valid){
    console.log(this.signInForm.value);  // {first: 'Nancy', last: 'Drew'}
    const formData = this.signInForm.value;
    
    this.auth.signIn(formData).subscribe((res) => {
      this.msg = res;
      console.log(this.msg)
      if(this.msg.status == 200){
        console.log(+this.msg.status+" "+this.msg.msg.msg)
        alert(this.msg.msg.email+" Signed In Successfully");

        console.log("line 36 auth service :")
        console.log(this.auth.isAuthenticated(res));
        this.route.navigateByUrl('/tabs/tab1');
      }
      else if(this.msg.status == 401){
        console.log(+this.msg.status+" "+this.msg.msg)
        alert(this.msg.msg);
        console.log("line 36 auth service :")
        console.log(this.auth.isAuthenticated(res));
      }
      else{
        console.log(+this.msg.status+" "+this.msg.msg)
        alert(this.msg.msg);
      }
      // alert(this.msg.status);
    })
  }
  else{
    alert('Please fill all fields');
  }
}
}
