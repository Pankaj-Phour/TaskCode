import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {


  users:any = [
    {checked:'',firstname:'Pankaj',lastname:'Phour',status:'active',email:70,role:'Frontend developer',teams:['Angular','Frontend','developers'],options:['edit','delete']}
  ]
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    for(let i=1;i<100;i++){
      this.users.push(this.users[0])
    }
    console.log(this.users);
    
  }


}
