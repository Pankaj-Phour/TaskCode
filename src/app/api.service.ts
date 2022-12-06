import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  formDataEvent = new EventEmitter();
  
  
  dataPassFunction(data:any){
    this.formDataEvent.emit(data)
  }

  constructor() { }
}
