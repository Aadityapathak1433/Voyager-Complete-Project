import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AppComponent } from './app.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';

const routes: Routes = [
    {path: 'Users-list', component: UserListComponent},
    {path:'',pathMatch:'full',redirectTo:'Users-list'},
    {path:'update/:id',component:UpdateUserComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }