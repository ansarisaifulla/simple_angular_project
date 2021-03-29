import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { RestoService } from './../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup;
 
  alert:boolean=false;
  constructor(private resto:RestoService,private builder: FormBuilder) { }

  ngOnInit(): void {
    this.register=this.builder.group({
      name: [null, Validators.required],
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: [null, Validators.required],
      address:[null, Validators.required]
    });
    
    // new FormGroup({
    //   name:new FormControl('',Validators.required),
    //   email:new FormControl('',Validators.required),
    //   password:new FormControl('',Validators.required)
    // });
  }
  get name() { return this.register.get('name'); }
  get email() { return this.register.get('email'); }
  get password() { return this.register.get('password'); }
  get address() { return this.register.get('address'); }
  collection()
  {
    // console.log(this.register.value);
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
