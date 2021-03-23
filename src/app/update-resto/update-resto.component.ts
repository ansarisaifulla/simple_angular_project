import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  alert:boolean=false;
  constructor(private router:ActivatedRoute,private resto:RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((data)=>{
      this.editResto=new FormGroup({
        name:new FormControl(data['name']),
        email:new FormControl(data['email']),
        address:new FormControl(data['address'])
      })
    })
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((data)=>{
      this.alert=true;
      console.warn(data);
    })
  }
  closeAlert()
  {
    this.alert=false;
  }

}
