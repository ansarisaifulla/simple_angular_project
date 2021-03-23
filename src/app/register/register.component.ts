import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { RestoService } from './../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  alert:boolean=false;
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collection()
  {
    this.resto.registerUser(this.register.value).subscribe((result )=>{
      console.warn("result is here",result)
      // this.register.reset({});
    this.alert=true;
    })
    
  }
  closeAlert()
  {
    this.alert=false;
  }

}
