import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  collection:any=[];
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((data)=>{
      console.warn(data);
      this.collection=data;
    })
  }
  deleteResto(id)
  {
    this.collection.splice(id-1,1);
    this.resto.deleteResto(id).subscribe((data)=>{
      console.warn(data);
    })
  }

}
