import { Component } from '@angular/core';


export interface Studentslist {
  name: string;
  id: string;
  class: string;
  address: string;
  // isShow: boolean
}

export let ELEMENT_DATA: Studentslist[] = [
  {
    name: 'Nguyen Van A',
    id: '1',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  },
  {
    name: 'Nguyen Van b',
    id: '2',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  },
  {
    name: 'Nguyen Van C',
    id: '3',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  },
  {
    name: 'Nguyen Van D',
    id: '4',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  },
  {
    name: 'Nguyen Van E',
    id: '5',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  },
  {
    name: 'Nguyen Van F',
    id: '6',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  },
  {
    name: 'Nguyen Van G',
    id: '7',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  },
  {
    name: 'Nguyen Van H',
    id: '8',
    class: 'a1',
    address: 'lsoemlao',
    // isShow: true
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'alpha-project';
}

