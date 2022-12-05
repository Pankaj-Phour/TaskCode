import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebar:any = [
    {name:'Personal Details'},
    {name:'Residential Address'},
    {name:'Office Address'},
    {name:'Document Details'},
    {name:'Nominee Details'},
    {name:'Payment Details'},
    {name:'Workflow Details'},
    {name:'Rejected Document Details'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
