import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

currentSlide:number = 1;
groupCheck:boolean = false;
  users:any = [
    {checked:false,name:'Pankaj Phour',userId:'@pankaj',status:'active',email:70,role:'Frontend developer',teams:['Angular','Frontend','developers'],options:['edit','delete'],index:1}
  ]
  randomData:any = {
    names:['Loki Odinson','Tony Stark','Steve Rogers','Bruce Banner','Nick Fury','Steven Strange','Barry Allen','Natasha Romanoff','Thor Odinson','Bucky Barnes','Clint Barton'],
    roles:['Backend developer','Frontend developer','Data analyst','Quality analyst','Project manager','HR Manager'],
    teams:[['Angular','Frontend','developers'],['Node','Backend','Developer'],['management','oberver'],['Reporting','Assistance'],['Security','Hardware','Other']]
  }

  icons:any = [
    'https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png',
    'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
  ]
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    for(let i=1;i<100;i++){
      const obj= {...this.users[this.users.length-1]};
      
      obj.email = Math.round(Math.random()*100);
      obj.name = this.randomData.names[Math.floor(Math.random()*this.randomData.names.length)];
      obj.role = this.randomData.roles[Math.floor(Math.random()*this.randomData.roles.length)];
      obj.teams = this.randomData.teams[Math.floor(Math.random()*this.randomData.teams.length)];
      obj.userId = `@${obj.name.split(' ')[0]}`;
      obj.index = i+1;
      // obj.email = 84;
      obj.status = i%2 == 0 ? 'Customer' : 'Churned';
      console.log(obj,obj.email);
      this.users.push({...obj});
        
    }
    console.log(this.users);
    
    
  }


  changeSlide(type:string){
    this.groupCheck = false;
    console.log(type);
    if(type=='next'){
      this.currentSlide += 1;
    }
    else{
      this.currentSlide -= 1;
    }
    
  }

  toggleSingle(index:number){
    this.users[index].checked = !this.users[index].checked;
  }

  toggleGroup(){
    this.groupCheck = !this.groupCheck;
    let length = this.users.length;
    for(let i=0;i<length;i++){
      if(i/10<this.currentSlide && i/10>=(this.currentSlide-1)){
        this.users[i].checked = this.groupCheck;
        
      }
    }
  }

  togglePage(index:number){
    this.currentSlide = index;
  }

}
