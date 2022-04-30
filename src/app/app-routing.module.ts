
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { AuthService } from 'src/service/auth.service';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/client/tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [AuthService],
  },
  {
    path:'tab1',
    loadChildren: () =>import('./pages/client/tab1/tab1-routing.module').then(m=>m.Tab1PageRoutingModule)
  },
  {
    path: 'add-new-appointment',
    loadChildren: () => import('./pages/client/bookings/add-new-appointment/add-new-appointment.module').then( m => m.AddNewAppointmentPageModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/client/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'update-appointment',
    loadChildren: () => import('./pages/client/bookings/update-appointment/update-appointment.module').then( m => m.UpdateAppointmentPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/client/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./pages/admin/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/admin/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./pages/client/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  }
  ,
  {
    path: 'admin-homepage',
    loadChildren: () => import('./admin-homepage/admin-homepage.module').then( m => m.AdminHomepagePageModule)
  },
  {
    path: 'admin-update/:id',
    loadChildren: () => import('./pages/admin/users/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./pages/admin/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
