import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { User } from 'src/app/users/models/user';
import { UserService } from 'src/app/users/services/user.service';
import Swal from 'sweetalert2';
import { Switch } from '../../models/switch';
import { SwitchService } from '../../services/switch.service';

@Component({
  selector: 'ed-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  status: boolean;
  user:any;

  form: FormGroup = new FormGroup({
    status: new FormControl(''),
    id: new FormControl('')
  })

  sw: Switch;
  swLogin: Switch;
  user2: User = {
    id: 1,
    username: 'a',
    password: 'asfd'
  };

  constructor(private router: Router, private swService: SwitchService, private userService: UserService) { 

  }

  seeStatus(){
    this.swService.get("1").subscribe(data => {
      this.sw = data.sw
      console.log(this.sw)
    })
    
  }

  seeStatus2(){
    this.swService.get("2").subscribe(data => {
      this.swLogin = data.sw
    })
  }


  changeStatus(id: any){
    if(id == 1){
      if(this.sw.status){
        this.sw.status = false;
      } else {
        this.sw.status = true;
      }  
    } else if(id == 2){
      if(this.swLogin.status){
        this.swLogin.status = false;
      } else {
        this.swLogin.status = true;
      }
  
    }
    this.swService.update(this.sw, id)
  }




  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user")!);
    this.seeStatus();
    this.seeStatus2();
  }

}
