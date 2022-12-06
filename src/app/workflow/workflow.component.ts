import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  bottom:any =[
    {name:'A'},
    {name:'B'},
    {name:'C'},
    {name:'D'},
    {name:'E'},
  ];
  userData:any ={
    firstName:'john',
    middleName:'wick',
    lastName:'smith',
    email:'john.smith@gmail.com',
    fatherName:'Mark ruffalo',
    dateOfBirth:'1990-01-01',
    isPending:3
  }
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.api.formDataEvent.subscribe((data:any)=>{
        console.log(data);
        this.userData = data;
    })
  }


}
