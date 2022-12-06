import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userData:boolean = false;
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.formDataEvent.subscribe((data)=>{
      if(data){
        this.userData = true;
      }
    })
  }

}
