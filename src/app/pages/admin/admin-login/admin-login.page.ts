import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup,FormBuilder,NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { BookingsService } from 'src/service/bookings.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

adminLoginForm : FormGroup;

pwdIcon ="eye-outline";
showPassword: boolean = false;
msg : any;

  constructor(private fb : FormBuilder,  private auth : AuthService,  private bookService : BookingsService,private route : Router) {
    this.run();
   }
   togglePwd()
   {
     this.showPassword = !this.showPassword;
     this.pwdIcon = this.showPassword? "eye-off-outline":"eye-outline";
   }

  ngOnInit() {
    this.adminLoginForm  = this.fb.group({
      email:["",Validators.email],
      password:["",Validators.required]
    });
    this.bookService.getAllBookings().subscribe((res) => {
      console.log(res);
    })
  }

  run(){
    this.auth.getAllUsers().subscribe((res)=>{
      console.log(res);
    })
  }

onSubmit(): void {
  if(this.adminLoginForm.valid){
    console.log(this.adminLoginForm.value);  // {first: 'Nancy', last: 'Drew'}
    const formData = this.adminLoginForm.value;
    this.auth.signIn(formData).subscribe((res) => {
      this.msg = res;
      console.log(this.msg)
      if(this.msg.status == 200){
        console.log(+this.msg.status+" "+this.msg.msg.msg)
        alert(this.msg.msg.email+"Signed In Successfully");

        console.log("line 36 auth service :")
        console.log(this.auth.isAuthenticated(res));
        this.route.navigateByUrl('/admin-homepage');
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
