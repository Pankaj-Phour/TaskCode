import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
topItems:any =[
  {name:'https://cdn-icons-png.flaticon.com/512/2956/2956744.png'},
  {name:'https://static.vecteezy.com/system/resources/previews/010/157/862/non_2x/house-and-home-icon-symbol-sign-free-png.png'},
  {name:'https://i.pinimg.com/originals/9e/d0/53/9ed053157387446888e4eb329ef0e553.png'},
  {name:'https://www.svgrepo.com/download/35686/layer.svg'},
  {name:'https://static.thenounproject.com/png/2953569-200.png'},
  {name:'https://www.iconpacks.net/icons/1/free-pie-chart-icon-660-thumb.png'},
  {name:'https://www.svgrepo.com/download/35686/layer.svg'},
]
bottomItems:any =[
  {name:'https://www.svgrepo.com/download/13688/settings.svg'},
  {name:'https://www.iconpacks.net/icons/1/free-pie-chart-icon-660-thumb.png'},
  {name:'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
