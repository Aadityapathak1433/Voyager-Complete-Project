import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  user: Users;
  id:number;
  constructor(private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
      this.UserService.getUserById(this.id).subscribe(data=>{
        this.user=data;
      });error=>console.log(error);
      
  }
onSubmit() {
  this.UserService.updateEmployee(this.id,this.user).subscribe(data=>{  
    this.goTolist();
  },
error=>console.log(error));
  } 
  goTolist(){
    this.router.navigate(['/Users-list']); 
  }
}
