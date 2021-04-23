import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ip',
  template: '<h3>ip component</h3>'
})


export class IpComponent {
  constructor(private http: HttpClient){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')

  .toPromise()

  .then(resJson => console.log(resJson))

  .catch(err => console.log(err))

 }


  }

