import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-signin',
  template: `
   <form #formSignIn='ngForm'>
    <input [(ngModel)]='email' placeholder='Email' name='email'>
    <br><br>
    <input [(ngModel)]='password' type="password" placeholder='Password' name='password'>
    <br><br>
    <button>Submit</button>
   </form>
  `
})


export class SigninComponent {
  email = '';
  password = '';

  }
