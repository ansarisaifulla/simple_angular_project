import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,NgForm} from '@angular/forms';
import { RestoService } from './../resto.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  collection:any=[];
  alert1:boolean=false;
  alert2:boolean=false;
  flag:any=0;
  constructor(private resto:RestoService,private _router: Router) { }

  ngOnInit(): void {
  }
 
  onLogin(loginForm:NgForm){
    console.log(loginForm.value);
    this.resto.getUser().subscribe((result )=>{
      this.collection=result;
      this.collection.forEach(element => {
        if(loginForm.value.email==element.email && loginForm.value.password==element.password)
        {
          
          localStorage.setItem('token',loginForm.value.email);
          this.alert1=true;
          this._router.navigate(['list']);
          return;
          
        }
       
      });
      if(!this.alert1)
      {
        this.alert2=true;
      }
     

    });
  }
  closeAlert1()
  {
    this.alert1=false;
  }
  closeAlert2()
  {
    this.alert2=false;
  }

}
