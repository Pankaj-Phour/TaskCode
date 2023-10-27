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
    {checked:false,name:'Pankaj Phour',userId:'@pankaj',status:'active',email:70,role:'Frontend developer',teams:['Angular','Frontend','developers'],options:['edit','delete']}
  ]

  icons:any = [
    'https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png',
    'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
  ]
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    for(let i=1;i<100;i++){
      const obj= this.users[this.users.length-1];
      
      obj.email = Math.round(Math.random()*100);
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
      if(i/10<this.currentSlide && i/10>(this.currentSlide-1)){
        this.users[i].checked = this.groupCheck;
        
      }
    }
  }

}
