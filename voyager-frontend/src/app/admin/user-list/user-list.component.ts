import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Users } from '../../users';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
deleteEmployee(arg0: number) {
throw new Error('Method not implemented.');
}
  users: Users[] = [];
  
  constructor(private UserService: UserService,private router:Router) {}
  
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.UserService.getUserList().subscribe(data=>{
      this.users=data;
    })
  }
  updateUser(id:number){
    console.log(id);
    
    this.router.navigate(['update',id]);
  }
  deleteUser(id: number){
    this.UserService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }
}
