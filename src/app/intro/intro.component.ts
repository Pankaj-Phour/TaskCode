import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  userForm:FormGroup;
  afterSubmit:boolean = false;
  Submit:boolean = false;
  constructor(private fb:FormBuilder,
    private api:ApiService
    ) { }


  validator(){
    this.userForm = this.fb.group({
      firstName : new FormControl('',Validators.required),
      middleName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      fatherName : new FormControl('',Validators.required),
      email : new FormControl('',Validators.compose([Validators.required,Validators.email])),
      birthDate : new FormControl('',Validators.required),
      photo : new FormControl('',Validators.required),
      isPending:new FormControl(4)
    })
  }


  ngOnInit(): void {
    this.validator();
  }

  submit(){
    this.Submit = true;
    setTimeout(() => {
    this.Submit = false;
    }, 3000);
    console.log("Submitting");
    if(this.userForm.invalid){
      console.log("Please fill all the fields to submit");
    }
    else{
      this.afterSubmit = true;
      this.api.dataPassFunction(this.userForm.value)
      this.userForm.reset();
    }
  }

  reload(){
    window.location.reload();
  }
}
