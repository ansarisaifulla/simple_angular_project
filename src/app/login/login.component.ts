import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { RestoService } from './../resto.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login=new FormGroup({
  //   email:new FormControl(''),
  //   password:new FormControl('')
  // });
  collection:any=[];
  email:string;
  pass:string;
  alert1:boolean=false;
  alert2:boolean=false;

  constructor(private resto:RestoService,private _router: Router) { }

  ngOnInit(): void {
  }
  loginUser()
  {
    this.resto.getUser().subscribe((result )=>{
      console.warn("result is here",result);
      this.collection=result;
      this.collection.forEach(element => {
        if(this.email==element.email && this.pass==element.password)
        {
          this._router.navigate(['list'])
          this.alert1=true;
          return;
        }
        else
        {
          this.alert2=true;
          return;
        }
      });
     

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
