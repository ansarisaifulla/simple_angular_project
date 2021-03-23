import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  addResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  alert:boolean=false;
    constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  
  collectResto()
  {
    this.resto.saveResto(this.addResto.value).subscribe((result )=>{
      // console.warn("result is here",result)
      this.addResto.reset({});
    this.alert=true;
    })
    
  }
  closeAlert()
  {
    this.alert=false;
  }


}
