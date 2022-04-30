import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../service/users.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  userUpdateForm :FormGroup;
  obj : any;
  constructor(private fb: FormBuilder, private users: UsersService) { }

  get username() {
    return this.userUpdateForm.get('username');
  }

  get userEmail() {
    return this.userUpdateForm.get('userEmail');
  }

  get userPhone() {
    return this.userUpdateForm.get('userPhone');
  }

  get userPassword() {
    return this.userUpdateForm.get('userPassword');
  }

 

  ngOnInit() {
    // ... get user details from database and set the form fields as such
    this.userUpdateForm = this.fb.group({
      username: ['', Validators.required, Validators.minLength(2)],
      userEmail: ['',  Validators.email],
      userPhone: ['', Validators.required, Validators.minLength(10)],
      userPassword: ['', Validators.required, Validators.minLength(6)],
    });
  }

  onSubmit() {
    // this.usersService.updateUser(this.userUpdateForm.value);
    let formData = this.userUpdateForm.value
    let date = Date();
    console.log(formData.userEmail)
    var mail ={
      email: formData.userEmail
    }
    this.users.getUserByEmail(mail).subscribe((data) =>{
      this.obj = data;
      console.log(this.obj)
      this.obj.email = formData.userEmail;
      this.obj.firstname = formData.username;
      this.obj.phone = formData.userPhone;
      this.obj.password = formData.userPassword;
      console.log(this.obj)
     this.users.updateUser(this.obj);//.subscribe((res) =>{
    //    console.log(res)
    //  });
    // console.log(fo)rmData)
  });
  console.log(this.obj)
}

}
